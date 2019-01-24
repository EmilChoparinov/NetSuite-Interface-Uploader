import * as vscode from 'vscode';
import { SelectAccountPrompt } from '../prompts/select-account';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.selectAccount', async () => {
        const selectAccountPrompt = new SelectAccountPrompt(context);
        const credentialInfo = {} as { [credential: string]: credentials };
        await selectAccountPrompt.runPrompt(credentialInfo);

        if (selectAccountPrompt.success) {
            const chosenCredential = credentialInfo['credential'];

            context.workspaceState.update('credential', chosenCredential);
            vscode.window.showInformationMessage(`Your Project Credentials Were Successfully Set`);
        }
    });

    context.subscriptions.push(disposable);
};