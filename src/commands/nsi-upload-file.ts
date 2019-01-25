import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';
import { AskForMasterPasswordPrompt } from '../prompts/master-password';

import * as Uploader from './../../ns_npm_repository/ns-uploader';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.uploadFile', async () => {
        const accountSize = await EncryptionManager.getSize(context);

        if (accountSize < 1) {
            const credentialQuestion =
                await vscode.window.showInformationMessage('You have not entered any NetSuite Credential\'s to upload with yet.', 'Add Account', 'Close');
            if (credentialQuestion === 'Add Account') {
                await vscode.commands.executeCommand('extension.addAccount');
            }
            else { return; }
        }

        let credential = context.workspaceState.get('credential') as string;

        if (!credential) {
            const credentialQuestion =
                await vscode.window.showInformationMessage('You must also have an account selected for this project', 'Select Now', 'Close');
            if (credentialQuestion === 'Select Now') {
                await vscode.commands.executeCommand('extension.selectAccount');
            } else { return; }
        }

        credential = context.workspaceState.get('credential');

        const masterPasswordPrompt = new AskForMasterPasswordPrompt(context);
        await masterPasswordPrompt.runPrompt({});

        const isMasterEntered = await masterPasswordPrompt.containsMasterKey();
        if (isMasterEntered) {
            const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);
            const decipheredText = manager.getDecipheredText(credential);
            const credentialJSON = JSON.parse(decipheredText) as credentials;


            const uploader = new Uploader(credentialJSON);
            const name = getName(vscode.window.activeTextEditor.document.fileName);

            uploader.addOrUpdateFile(
                -15,
                name,
                vscode.window.activeTextEditor.document.getText(),
            )
                .then(result => {
                    vscode.window.showInformationMessage(`File '${name}' was successfully uploaded to the SuiteScripts Folder`, 'Close');
                })
                .catch(async error => {
                    const decision =
                        await vscode.window.showErrorMessage(
                            'ERROR OCCURED, please click OPEN and review the issue',
                            'Open Error', 'Close'
                        );
                    if (decision === 'Open Error') {
                        const document = await vscode.workspace.openTextDocument({
                            language: 'json',
                            content: error
                        });

                        await vscode.window.showTextDocument(document);
                    }
                });
        }
    });

    context.subscriptions.push(disposable);
};

const getName = (filePath: string) => {
    const paths = filePath.split('\\');
    return paths.pop();
};