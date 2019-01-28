import * as vscode from 'vscode';
import { ensureMasterPasswordExists } from '../prompts/master-password';

export const runCommand = (context: vscode.ExtensionContext) => {

    let disposable = vscode.commands.registerCommand('nsi.walkthrough', async () => {
        showTutorialMessage(
            'Welcome To NSI, this extension allows you to upload ' +
            'SuiteScripts seamlessly an NetSuite account. To continue, ' +
            'please enter a Master Password; this password will be used to ' +
            'encrypt all the credentials you have stored in this extension ' +
            'locally. This master password is not directly saved locally and ' +
            'is via a SHA-256 hash.'
        ).completed = true;

        if (await ensureMasterPasswordExists(context)) {

            const completedAddAccount = showTutorialMessage(
                `Now that you have a Master Password, it's time to enter a ` +
                `NetSuites Account's Credentials. These credentials are AES ` +
                `Encrypted to your local storage. Use the 'Add Account' ` +
                'command to add other accounts later.'
            );

            const didAddAccountCommandFinish =
                await vscode.commands.executeCommand('nsi.addAccount');

            if (!didAddAccountCommandFinish) { return false; }

            completedAddAccount.completed = true;

            const completedSelectAccount = showTutorialMessage(
                'Now that you have a Master Password and a NetSuite Account, ' +
                'you need to select an account to currently use in this ' +
                'specific VSCode workspace. Each workspace will have a ' +
                'different account available to be linked to be easier to use.' +
                `Use the 'Select Account' command to change this later for ` +
                `your current workspace.`
            );

            const didSelectAccountCommandFinish =
                await vscode.commands.executeCommand('nsi.selectAccount');

            if (!didSelectAccountCommandFinish) { return false; }

            completedSelectAccount.completed = true;

            showTutorialMessage(
                `You're now all set! In order to upload a file to NetSuite,  ` +
                `you can currently access the 'Upload File' command through ` +
                `the Context Menu when clicking on a file or through the ` +
                `Command Prompt (ctrl + shift + p) and typing 'Upload File'. ` +
                'Note that the file that will always be uploaded is the one ' +
                'you currently have open. You can always run this command ' +
                'again if you want the explaination again.'
            ).completed = true;

        }

    });

    context.subscriptions.push(disposable);
};

/**
 * creates a standard information dialog box and shows it to
 * the user
 * 
 * @param explaination main string to show to the user
 */
const showTutorialMessage = (explaination: string) => {

    const completionPointer = { completed: false };

    new Promise(async (resolve) => {
        let killer;
        const message = async () => {
            if (completionPointer.completed) {
                clearInterval(killer);
                resolve();
                return;
            }

            await vscode.window.showInformationMessage(
                explaination,
                'Close'
            );

            clearInterval(killer);
            resolve();
        };
        message();
        killer = setInterval(message, 15 * 1000);
    });

    return completionPointer;
};