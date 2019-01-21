import * as vscode from 'vscode';
import { AskForMasterPasswordPrompt } from '../prompts/master-password';
import { AddAccountSeries } from '../prompts/add-account/entry';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.addAccount', async () => {
        vscode.window.showInformationMessage('file sync body');
        const isMasterEntered = await new AskForMasterPasswordPrompt(context).runPrompt();
        if (isMasterEntered) {
            await new AddAccountSeries().runPrompt();
        }
    });


    context.subscriptions.push(disposable);
};