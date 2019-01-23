import * as vscode from 'vscode';
import { deactivate } from '../extension';
import { join } from 'path';
import rimraf = require('rimraf');
import { AskForMasterPasswordPrompt } from '../prompts/master-password';
import { EncryptionManager } from '../password-encryption-manager';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.purgeCredentials', async () => {
        const answer = await vscode.window.showQuickPick(['Yes', 'No'], {
            placeHolder: 'This process will make recovery impossible. Continue?'
        }) as 'Yes' | 'No';


        if (answer === 'No' || answer === undefined) { return vscode.window.showInformationMessage('Purge Cancelled'); }

        const masterPasswordPrompt = new AskForMasterPasswordPrompt(context);
        await masterPasswordPrompt.runPrompt({});

        const isMasterEntered = await masterPasswordPrompt.containsMasterKey();
        if (isMasterEntered) {
            const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);
            const credentials = await manager.decryptAll();

            const credentialMap = {};

            const formattedCredentials = credentials.map((credential) => {
                const currentLabel = `${credential.email} (${credential.account})`;
                credentialMap[currentLabel] = credential;
                return currentLabel;
            });

            const chosenLabels = await vscode.window.showQuickPick(formattedCredentials, { canPickMany: true });

        }
    });


    context.subscriptions.push(disposable);
};