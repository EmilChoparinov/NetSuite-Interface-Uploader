import * as vscode from 'vscode';
import { AskForMasterPasswordPrompt } from '../prompts/master-password';
import { EncryptionManager } from '../password-encryption-manager';
import { SelectAccountPrompt } from '../prompts/select-account';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.selectAccount', async () => {
        const selectAccountPrompt = new SelectAccountPrompt(context);
        const credentialInfo = {} as { [credential: string]: credentials };
        await selectAccountPrompt.runPrompt(credentialInfo);

        if (selectAccountPrompt.success) {
            const chosenCredential = credentialInfo['credential'];

            context.workspaceState.update('credential', chosenCredential);
        }
    });

    context.subscriptions.push(disposable);
};