import * as vscode from 'vscode';
import { SelectAccountPrompt } from '../prompts/select-account';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.selectAccount', async () => {

        // run the select account prompt
        const selectAccountPrompt = new SelectAccountPrompt(context);

        // object to store the info received as input from the user
        const credentialInfo = {} as { credential: string };
        await selectAccountPrompt.runPrompt(credentialInfo);


        // if the command was not canceled, continue
        if (selectAccountPrompt.success) {

            // get the credential label
            const chosenCredential = credentialInfo['credential'];

            // store the encrypted credentials label
            context.workspaceState.update('credential', chosenCredential);
            vscode.window.showInformationMessage(`Your Project Credentials Were Successfully Set`);
            return true;
        }
        return false;
    });

    context.subscriptions.push(disposable);
};