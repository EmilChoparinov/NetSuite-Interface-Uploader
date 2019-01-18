import * as vscode from 'vscode';
import { newAccountPrompt } from '../prompts/new-acc-prompt';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.addAccount', async () => {
        vscode.window.showInformationMessage('file sync body');
        const data = newAccountPrompt(context);
    });
    
    
	context.subscriptions.push(disposable);
};