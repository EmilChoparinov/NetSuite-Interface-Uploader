import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.syncFile', () => {
    });
    
    
	context.subscriptions.push(disposable);
};