import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.syncFile', () => {
		vscode.window.showInformationMessage('file sync body');
    });
    
    
	context.subscriptions.push(disposable);
};