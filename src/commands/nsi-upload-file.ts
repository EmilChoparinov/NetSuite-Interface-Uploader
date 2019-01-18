import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {
    console.log('nsi upload file loaded');
    let disposable = vscode.commands.registerCommand('extension.uploadFile', () => {
        const manager = new EncryptionManager('hello test', context);
        console.log(manager.verifyMasterPassword());
        console.log(manager.decryptAll());
    });


    context.subscriptions.push(disposable);
};