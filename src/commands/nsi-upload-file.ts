import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {
    let disposable = vscode.commands.registerCommand('extension.uploadFile', async () => {
        const manager = new EncryptionManager('123', context);
        await manager.encrypt({
            account: '123',
            email: '456',
            password: '789',
            roleId: '101112'
        });
        console.log(await manager.verifyMasterPassword());
        console.log(await manager.decryptAll());
    });


    context.subscriptions.push(disposable);
};