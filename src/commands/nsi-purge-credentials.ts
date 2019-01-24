import * as vscode from 'vscode';
import { purgeCredentialsSeries } from '../prompts/purge-credentials/entry';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('extension.purgeCredentials', async () => {
        const purgedInfo = await purgeCredentialsSeries(context);
        console.log(purgedInfo);
    });


    context.subscriptions.push(disposable);
};