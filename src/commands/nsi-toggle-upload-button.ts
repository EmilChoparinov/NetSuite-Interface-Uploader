import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {

    const button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    button.text = 'NSI Upload';
    button.command = 'extension.uploadFile';
    
    const initialButtonState = context.globalState.get('button');

    if (initialButtonState) {
        button.show();
    }

    let disposable = vscode.commands.registerCommand('extension.toggleUploadButton', async () => {
        const currentButtonState = context.globalState.get('button');
        if (currentButtonState) {
            context.globalState.update('button', false);
            button.hide();
        } else {
            context.globalState.update('button', true);
            button.show();
        }
    });

    context.subscriptions.push(disposable);
};