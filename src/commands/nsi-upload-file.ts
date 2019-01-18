import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {
    let disposable = vscode.commands.registerCommand('extension.uploadFile', async () => {
        const manager = new EncryptionManager('123', context);

        console.log(await manager.verifyMasterPassword());
    });


    context.subscriptions.push(disposable);
};