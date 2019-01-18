import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {
    console.log('nsi select account loaded');

    let disposable = vscode.commands.registerCommand('extension.selectAccount', () => {
        vscode.window.showInformationMessage('file sync body');
    });
    
    
	context.subscriptions.push(disposable);
};