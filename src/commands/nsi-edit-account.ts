import * as vscode from 'vscode';
import { SelectAccountPrompt } from '../prompts/select-account';
import { EncryptionManager } from '../password-encryption-manager';
import { credentialsValidator } from '../utils/validate-credentials';
import { openFile } from '../utils/open-file';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.editAccount', async () => {

        // make sure an account exists first
        const accountSize = await EncryptionManager.getSize(context);
        if (accountSize < 1) {

            // if it doesnt exist, ask if they want to run the add account
            // command and run it if possible
            const clickedButton = await vscode.window.showInformationMessage('There are no accounts to edit.', 'Add Account', 'Close');
            if (clickedButton === 'Add Account') {
                vscode.commands.executeCommand('extension.addAccount');
            }
        }

        // create a prompt that will let the user select an account
        const selectAccountPrompt = new SelectAccountPrompt(context);

        // create an object that will later be modified by the prompt to store
        // the answer that was inputted
        const credentialInfo = {} as { [credential: string]: string };
        await selectAccountPrompt.runPrompt(credentialInfo);

        // if the prompt was not cancelled, then continue with the command
        if (selectAccountPrompt.success) {

            // get the credential that was chosed to be picked
            const chosenCredential = credentialInfo['credential'];

            // create an encryption manager, we know that the masterkey is available because
            // select account prompt will prompt for it if it doesnt exist
            const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);

            // get the plaintext credentials
            const decipyheredCredential = manager.getDecipheredText(chosenCredential);

            // render the JSON to be edited in the vscode editor
            const document = await renderJSONDocument(decipyheredCredential);

            vscode.window.showInformationMessage(
                'Close this file when you are done editing. Saving will do nothing'
            );

            // create a listener to wait for the temp file to be closed
            const closeEvent = vscode.workspace.onDidCloseTextDocument(async (closedDocument) => {

                // the file that must be closed should be the one that was created
                if (closedDocument.fileName === document.fileName) {

                    // if it was, dispose the event to stop listening
                    closeEvent.dispose();

                    // check if the credentials are valid entered are valid
                    const isValid = credentialsValidator(document.getText());

                    // if its valid, update the credentials stored
                    if (isValid) {
                        const oldCredentials: credentials = JSON.parse(decipyheredCredential);
                        const newCredentials: credentials = JSON.parse(document.getText());

                        // generate the name hash that will be used to remove the account
                        const accountId = manager.getName(oldCredentials);

                        // remove the old data
                        await manager.removeAccount(accountId);

                        // re-encrypt
                        await manager.encrypt(newCredentials);

                        const reviewChanges =
                            await vscode.window.showInformationMessage(
                                'Credentials successfully encrypted. Would you like to view the changes?',
                                'Yes',
                                'No'
                            );

                        if (reviewChanges === 'Yes') {
                            openFile(JSON.stringify(newCredentials, null, 4));
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