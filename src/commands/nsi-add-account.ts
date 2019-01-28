import * as vscode from 'vscode';
import { ensureMasterPasswordExists } from '../prompts/master-password';
import { addAccountSeries } from '../prompts/add-account/entry';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.addAccount', async () => {

        const isMasterEntered = await ensureMasterPasswordExists(context);
        if (isMasterEntered) {

            // run the wizard prompt
            const credentials = await addAccountSeries();

            // if the prompts came through successfully, add the account to the encryption
            // manager
            if (credentials.success) {
                const capturedData = credentials.capturedData as credentials;
                const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);
                await manager.encrypt(capturedData);

                vscode.window.showInformationMessage(`Account '${capturedData.email}' encrypted and stored`, 'Close');
                return true;
            }
        }
        return false;
    });


    context.subscriptions.push(disposable);
};