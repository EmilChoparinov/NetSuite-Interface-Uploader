import * as vscode from 'vscode';
import { purgeCredentialsSeries } from '../prompts/purge-credentials/entry';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('nsi.purgeCredentials', async () => {
        // just run the purge credential series here
        await purgeCredentialsSeries(context);
        return true;
    });


    context.subscriptions.push(disposable);
};