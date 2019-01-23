import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';
import { AskForMasterPasswordPrompt } from '../prompts/master-password';

export const runCommand = (context: vscode.ExtensionContext) => {
    let disposable = vscode.commands.registerCommand('extension.uploadFile', async () => {
        await new AskForMasterPasswordPrompt(context).runPrompt({});
        const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);
        console.log(await manager.verifyMasterPassword());
        console.log(await manager.decryptAll());
    });

    context.subscriptions.push(disposable);
};