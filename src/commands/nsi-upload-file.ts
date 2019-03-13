import * as vscode from 'vscode';
import { EncryptionManager } from '../password-encryption-manager';
import { ensureMasterPasswordExists } from '../prompts/master-password';

import * as Uploader from './../../ns_npm_repository/ns-uploader';
import { openFile } from '../utils/open-file';
import * as ts from 'typescript';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('nsi.uploadFile', async () => {

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
                await vscode.commands.executeCommand('nsi.addAccount');
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
                await vscode.commands.executeCommand('nsi.selectAccount');
            } else { return false; }
        }

        // get the credential to be used to upload to NetSuite
        credential = context.workspaceState.get('credential');

        // requires masterpassword
        const isMasterEntered = await ensureMasterPasswordExists(context);
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

            const workspace = findWorkspace();

            vscode.window.showInformationMessage(`Sending '${name}' to NetSuite...`);

            let rootFolderId = context.workspaceState.get('rootFolder') as number;

            // default to the suitescript folder
            if (!rootFolderId) { rootFolderId = -15; }


            const endingFolderId = await uploadPath(
                uploader,
                workspace.uri.path,
                vscode.window.activeTextEditor.document.uri.path,
                rootFolderId
            );

            const currentLanguage =
                vscode.window.activeTextEditor.document.languageId;

            let code = vscode.window.activeTextEditor.document.getText();

            if (currentLanguage === 'typescript') {
                vscode.window.showInformationMessage(
                    'Compiling TypeScript...',
                    'Close'
                );
                code = await compileTypescript(code);
            }

            // promise wrapper to return a boolean value if the command was 
            // successfully run
            return new Promise((resolve) => {

                // process the request
                uploader.addOrUpdateFile(

                    // folder to send it into from netsuite
                    endingFolderId,

                    // name of the file
                    `${name}.js`,

                    // the text to upload
                    code,
                )
                    .then(async result => {

                        let dynamicText = 'the SuiteScripts Folder';
                        if (rootFolderId !== -15) {
                            dynamicText = 'your designated folder';
                        }

                        await vscode.window.showInformationMessage(
                            `File '${name}' was successfully uploaded to ${dynamicText}`,
                            'Close'
                        );

                        askUserForButton(context);

                        resolve(true);
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

/**
 * get the file's name from a given path of a file
 * 
 * @param filePath path to a specific file
 */
const getName = (filePath: string) => {
    const paths = filePath.split('\\');
    const file = paths.pop();
    const indexOfMIME = file.lastIndexOf('.');
    return file.slice(0, indexOfMIME);
};

const findWorkspace = () => {
    const folders = vscode.workspace.workspaceFolders;
    const fullPath = vscode.window.activeTextEditor.document.uri.path;

    for (const folder of folders) {
        const folderPath = folder.uri.path;
        if (fullPath.includes(folderPath)) { return folder; }
    }

    vscode.window.showInformationMessage(
        'You must have a workspace open to upload to NetSuite. Open the ' +
        'containing folder in VSCode.'
    );

};

const askUserForButton = async (context: vscode.ExtensionContext) => {
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
            await vscode.commands.executeCommand('nsi.toggleUploadButton');

        }
        else if (buttonAnswer === 'No') {
            vscode.window.showInformationMessage(
                'If you change your mind, use the \'Toggle Upload Button\' command',
                'Close'
            );
        }
    }
};

/**
 * virtualizes the path in netsuite with the path in you workspace
 * 
 * @param uploader uploader object from ns npm repo
 * @param workspacePath path of the workspace the file exists in
 * @param filePath full path to the file
 * @param rootFolderId the folder that the path should start off from
 */
const uploadPath = async (
    uploader: any,
    workspacePath: string,
    filePath: string,
    rootFolderId: number
) => {

    const relativeFilePath = filePath.slice(workspacePath.length + 1);
    const folderPaths = relativeFilePath.split('/');

    // remove to file name itself
    folderPaths.pop();

    // reverse the array to pop the folders in order
    folderPaths.reverse();

    // sets the root folder
    let currentFolderId = rootFolderId;

    while (folderPaths.length) {
        const currentFolderName = folderPaths.pop();
        const { internalId } = await uploader.mkdir(currentFolderId, currentFolderName);
        currentFolderId = internalId;
    }
    return currentFolderId;
};

const compileTypescript = async (sourceFile: string) => {
    const { outputText: jsCode } = ts.transpileModule(sourceFile, {
        compilerOptions: {
            module: ts.ModuleKind.None,
            moduleResolution: ts.ModuleResolutionKind.NodeJs,
            target: ts.ScriptTarget.ES5,
            noImplicitAny: false,
            sourceMap: false,
            lib: ['es5', 'dom'],
            isolatedModules: true
        },
        reportDiagnostics: true
    });

    return jsCode;
};