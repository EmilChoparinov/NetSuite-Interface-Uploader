import { ExtensionContext } from "vscode";
import * as vscode from 'vscode';
import { EncryptionManager } from "../password-encryption-manager";

export const newAccountPrompt = async (context: ExtensionContext) => {
    const hasKey = !!context.workspaceState.get('masterkey');

    if (!hasKey) {
        await enterMasterPassword(context)
    }

    return await enterUserInfo(context);
};

const enterMasterPassword = async (context: ExtensionContext) => {
    const password = await vscode.window.showInputBox({
        prompt: 'Enter Your Master Password',
        password: true
    });

    const manager = new EncryptionManager(password, context);
    const isCorrectMaster = manager.verifyMasterPassword();

    if (isCorrectMaster) { context.workspaceState.update('masterkey', manager.key); }
};

const enterUserInfo = async (context: ExtensionContext): Promise<credentials> => {
    const email = await vscode.window.showInputBox({
        prompt: 'enter email'
    });
    const password = await vscode.window.showInputBox({
        prompt: 'enter password'
    });
    const roleId = await vscode.window.showInputBox({
        prompt: 'enter roleId'
    });
    const account = await vscode.window.showInputBox({
        prompt: 'enter account'
    });

    return {
        account,
        email,
        roleId,
        password
    };
};