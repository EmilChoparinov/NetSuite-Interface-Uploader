import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {
    console.log('nsi upload sync loaded');

    let disposable = vscode.commands.registerCommand('extension.nsiSyncFile', () => {
		vscode.window.showInformationMessage('file sync body');
    });
    
    
	context.subscriptions.push(disposable);
};