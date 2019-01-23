import * as vscode from 'vscode';
import { AskForMasterPasswordPrompt } from '../prompts/master-password';
import { addAccountSeries } from '../prompts/add-account/entry';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.addAccount', async () => {
        const masterPasswordPrompt = new AskForMasterPasswordPrompt(context);
        await masterPasswordPrompt.runPrompt({});
        
        const isMasterEntered = await masterPasswordPrompt.containsMasterKey();
        if (isMasterEntered) {
            const credentials = await addAccountSeries();

            if(credentials.success) {
                const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);
                manager.encrypt(credentials.capturedData as credentials);
            }
        }
    });


    context.subscriptions.push(disposable);
};