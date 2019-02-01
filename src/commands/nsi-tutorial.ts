import * as vscode from 'vscode';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('nsi.viewTutorial', async () => {
        const path = context.asAbsolutePath('tutorial.MD');

        const document = await vscode.workspace.openTextDocument(path);

        vscode.window.showTextDocument(document);
    });

    context.subscriptions.push(disposable);
};