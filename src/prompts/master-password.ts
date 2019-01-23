import { ExtensionContext } from "vscode";
import * as vscode from 'vscode';
import { EncryptionManager } from "../password-encryption-manager";
import { Prompt } from "./prompt";

export class AskForMasterPasswordPrompt extends Prompt {
    context: ExtensionContext;
    constructor(context: ExtensionContext) {
        super();
        this.context = context;
    }

    async showPrompt() {
        return await this.containsMasterKey();
    }
    
    async containsMasterKey() {
        const key = await this.context.workspaceState.get('masterkey');
        return !key;
    }

    prompt() {
        return vscode.window.showInputBox({
            prompt: 'Enter your Master Password',
            password: true
        });
    }

    async continue(password: string) {
        const manager = new EncryptionManager(password, this.context);
        const isCorrect = await manager.verifyMasterPassword();
        if (isCorrect) {
            await this.context.workspaceState.update('masterkey', manager.key);
        }
        return !isCorrect;
    }
}