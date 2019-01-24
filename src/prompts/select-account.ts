import { Prompt } from "./prompt";
import { ExtensionContext } from "vscode";
import { AskForMasterPasswordPrompt } from "./master-password";
import { EncryptionManager } from "../password-encryption-manager";
import * as vscode from 'vscode';

export class SelectAccountPrompt extends Prompt<objectAggregate> {

    context: ExtensionContext;
    multiSelect: boolean;
    credentialMap: { [credentialLabel: string]: credentials };
    constructor(context: ExtensionContext) {
        super();
        this.context = context;
        this.multiSelect = false;
        this.credentialMap = {};
    }

    public setMulti(newState: boolean) {
        this.multiSelect = newState;
        return this;
    }

    async getPrompt(): Promise<string> {
        const manager = new EncryptionManager(this.context.workspaceState.get('masterkey'), this.context);
        const credentials = await manager.decryptAll();


        const formattedCredentials = credentials.map((credential) => {
            const currentLabel = `${credential.email} (${credential.account})`;
            this.credentialMap[currentLabel] = credential;
            return currentLabel;
        });

        return vscode.window.showQuickPick(formattedCredentials, { canPickMany: this.multiSelect });
    }

    async shouldPromptBeRendered(): Promise<boolean> {
        const masterPasswordPrompt = new AskForMasterPasswordPrompt(this.context);
        await masterPasswordPrompt.runPrompt({});

        return await masterPasswordPrompt.containsMasterKey();
    }

    async postPromptRender(credentialLabel: string | string[], currentAggregate: objectAggregate): Promise<boolean> {
        if (typeof credentialLabel === 'string') {
            return await this.continueAsString(credentialLabel, currentAggregate);
        }
        return await this.continueAsArray(credentialLabel, currentAggregate);
    }

    private async continueAsString(credentialLabel: string, currentAggregate: objectAggregate) {
        currentAggregate['credential'] =
            new EncryptionManager(
                this.context.workspaceState.get('masterkey'),
                this.context
            ).getCipherText(this.credentialMap[credentialLabel]);
        return false;
    }

    private async continueAsArray(credentialLabels: string[], currentAggregate: objectAggregate) {
        const manager =
            new EncryptionManager(
                this.context.workspaceState.get('masterkey'),
                this.context
            );

        currentAggregate.credentials = credentialLabels.map((credentialLabel) => {
            return manager.getName(this.credentialMap[credentialLabel]);
        });

        return false;
    }

}