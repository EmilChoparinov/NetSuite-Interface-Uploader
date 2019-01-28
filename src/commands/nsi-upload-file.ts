import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';
import { ensureMasterPasswordExists } from '../prompts/master-password';

import * as Uploader from './../../ns_npm_repository/ns-uploader';
import { openFile } from '../utils/open-file';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.uploadFile', async () => {

        // make sure that the user already has an account entered
        const accountSize = await EncryptionManager.getSize(context);

        if (accountSize < 1) {

            // ask the user if they would currently like to run the command for convenince
            const credentialQuestion =
                await vscode.window.showInformationMessage(
                    'You have not entered any NetSuite Credential\'s to upload with yet.',
                    'Add Account', 'Close'
                );
            if (credentialQuestion === 'Add Account') {
                await vscode.commands.executeCommand('extension.addAccount');
            }
            else { return false; }
        }

        // make sure that the user already has an account selected
        let credential = context.workspaceState.get('credential') as string;

        if (!credential) {

            // ask the user if they would currently like to run the command for convenince
            const credentialQuestion =
                await vscode.window.showInformationMessage(
                    'You must also have an account selected for this project',
                    'Select Now', 'Close'
                );

            if (credentialQuestion === 'Select Now') {
                await vscode.commands.executeCommand('extension.selectAccount');
            } else { return false; }
        }

        // get the credential to be used to upload to NetSuite
        credential = context.workspaceState.get('credential');

        // requires masterpassword
        const isMasterEntered = ensureMasterPasswordExists(context);
        if (isMasterEntered) {

            // create the encryption manager to be used to decrypt the credential data of the 
            // account selected
            const manager = new EncryptionManager(context.workspaceState.get('masterkey'), context);

            // get the plaintext
            const decipheredText = manager.getDecipheredText(credential);

            // parse into a JSON
            const credentialJSON = JSON.parse(decipheredText) as credentials;


            // use the NetSuite uploader to upload a file to netsuite
            const uploader = new Uploader(credentialJSON);

            // get the name of the js file from the path
            const name = getName(vscode.window.activeTextEditor.document.fileName);

            // promise wrapper to return a boolean value if the command was 
            // successfully run
            return new Promise((resolve) => {
                // process the request
                uploader.addOrUpdateFile(

                    // -15 is the suitescript folder hardcoded in netsuite
                    -15,

                    // name of the file
                    name,

                    // the text to upload
                    vscode.window.activeTextEditor.document.getText(),
                )
                    .then(async result => {
                        await vscode.window.showInformationMessage(
                            `File '${name}' was successfully uploaded to the SuiteScripts Folder`,
                            'Close'
                        );

                        // ask for convenience if they want a button to click also
                        const hasAskedButtonQuestion = context.globalState.get('button');

                        // only ask if it has not yet been asked globally
                        if (hasAskedButtonQuestion === undefined) {
                            const buttonAnswer =
                                await vscode.window.showInformationMessage(
                                    'Would you like to add a button to upload?',
                                    'Yes', 'No'
                                );

                            if (buttonAnswer === 'Yes') {
                                await vscode.commands.executeCommand('extension.toggleUploadButton');

                            }
                            else if (buttonAnswer === 'No') {
                                vscode.window.showInformationMessage(
                                    'If you change your mind, use the \'Toggle Upload Button\' command',
                                    'Close'
                                );
                            }
                            resolve(true);
                        }
                    })
                    .catch(async error => {
                        const decision =
                            await vscode.window.showErrorMessage(
                                'ERROR OCCURED, please click OPEN and review the issue',
                                'Open Error', 'Close'
                            );
                        if (decision === 'Open Error') {
                            await openFile(JSON.stringify(error, null, 4));
                            resolve(false);
                        }
                    });
            });
        }

        return false;
    });

    context.subscriptions.push(disposable);
};

const getName = (filePath: string) => {
    const paths = filePath.split('\\');
    return paths.pop();
};