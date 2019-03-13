import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('nsi.setRootFolder', async () => {
        const folderId = await vscode.window.showInputBox({
            prompt: 'Enter a NetSuite Folder Id (default is -15)',
            ignoreFocusOut: true
        });

        context.workspaceState.update('rootFolder', folderId);
        vscode.window.showInformationMessage(
            `The folder to be used as root for uploading has been set to '${folderId}'`,
            'Close'
        );
    });

    context.subscriptions.push(disposable);
};