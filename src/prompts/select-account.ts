import { Prompt } from "./prompt";
import { ExtensionContext } from "vscode";
import { AskForMasterPasswordPrompt } from "./master-password";
import { EncryptionManager } from "../password-encryption-manager";
import * as vscode from 'vscode';

export class SelectAccountPrompt extends Prompt {

    context: ExtensionContext;
    multiSelect: boolean;
    constructor(context: ExtensionContext) {
        super();
        this.context = context;
        this.multiSelect = false;
    }

    public setMulti(newState: boolean) {
        this.multiSelect = newState;
    }

    async prompt(currentAggregate: objectAggregate): Promise<string> {
        const manager = new EncryptionManager(this.context.workspaceState.get('masterkey'), this.context);
        const credentials = await manager.decryptAll();

        const credentialMap = {};

        const formattedCredentials = credentials.map((credential) => {
            const currentLabel = `${credential.email} (${credential.account})`;
            credentialMap[currentLabel] = credential;
            return currentLabel;
        });

        return vscode.window.showQuickPick(formattedCredentials);
    }

    async showPrompt(): Promise<boolean> {
        const masterPasswordPrompt = new AskForMasterPasswordPrompt(this.context);
        await masterPasswordPrompt.runPrompt({});

        return await masterPasswordPrompt.containsMasterKey();
    }

    async continue(answer: string, currentAggregate: objectAggregate): Promise<boolean> {
        currentAggregate['credential'] = answer;
        return false;
    }

}