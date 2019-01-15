import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {
    console.log('nsi upload file loaded');
    
	let disposable = vscode.commands.registerCommand('extension.nsiUploadFile', () => {
		vscode.window.showInformationMessage('File Upload Body');
    });
    
    
	context.subscriptions.push(disposable);
};