import * as vscode from 'vscode';
import { AskForMasterPasswordPrompt } from '../prompts/master-password';
import { addAccountSeries } from '../prompts/add-account/entry';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.addAccount', async () => {
        vscode.window.showInformationMessage('file sync body');
        const masterPasswordPrompt = new AskForMasterPasswordPrompt(context);
        await masterPasswordPrompt.runPrompt({});
        
        const isMasterEntered = masterPasswordPrompt.containsMasterKey();
        if (isMasterEntered) {
            console.log(await addAccountSeries());
        }
    });


    context.subscriptions.push(disposable);
};