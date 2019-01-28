import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.tutorial', async () => {
        
    });

    context.subscriptions.push(disposable);
};