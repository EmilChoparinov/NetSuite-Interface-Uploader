import * as vscode from 'vscode';
import { SelectAccountPrompt } from '../prompts/select-account';
import { EncryptionManager } from '../password-encryption-manager';
import { credentialsValidator } from '../validate/credentials';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.editAccount', async () => {
        const accountSize = await EncryptionManager.getSize(context);
        if (accountSize < 1) {
            const clickedButton = await vscode.window.showInformationMessage('There are no accounts to edit.', 'Add Account', 'Close');
            if(clickedButton === 'Add Account') {
                vscode.commands.executeCommand('extension.addAccount');
            }
            return;
        }

        const selectAccountPrompt = new SelectAccountPrompt(context);
        const credentialInfo = {} as { [credential: string]: string };
        await selectAccountPrompt.runPrompt(credentialInfo);

        if (selectAccountPrompt.success) {
            const chosenCredential = credentialInfo['credential'];
            const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);
            const decipyheredCredential = manager.getDecipheredText(chosenCredential);

            const document = await renderJSONDocument(decipyheredCredential);

            vscode.window.showInformationMessage('Close this file when you are done editing. Saving will do nothing');

            const closeEvent = vscode.workspace.onDidCloseTextDocument(async (closedDocument) => {
                if (closedDocument.fileName === document.fileName) {
                    closeEvent.dispose();
                    const isValid = credentialsValidator(document.getText());
                    if (isValid) {
                        const oldCredentials: credentials = JSON.parse(decipyheredCredential);
                        const newCredentials: credentials = JSON.parse(document.getText());

                        const accountId = manager.getName(oldCredentials);
                        await manager.removeAccount(accountId);
                        await manager.encrypt(newCredentials);

                        const reviewChanges =
                            await vscode.window.showInformationMessage('Credentials successfully encrypted. Would you like to view the changes?', 'Yes', 'No');

                        if (reviewChanges === 'Yes') {
                            renderJSONDocument(JSON.stringify(newCredentials));
                        }
                    }
                }
            });

        }
    });

    context.subscriptions.push(disposable);
};

const renderJSONDocument = async (JSONString: string) => {
    const document = await vscode.workspace.openTextDocument({
        language: 'json',
        content: JSON.stringify(JSON.parse(JSONString), null, 4)
    });

    await vscode.window.showTextDocument(document);

    return document;
};