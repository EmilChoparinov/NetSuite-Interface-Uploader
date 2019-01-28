import { Prompt } from "./prompt";
import { ExtensionContext } from "vscode";
import { ensureMasterPasswordExists } from "./master-password";
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

    /**
     * sets if the selector allows multiple selection
     * 
     * false by default
     * 
     * @param newState if the selection should be for multiple accounts
     */
    public setMulti(newState: boolean) {
        this.multiSelect = newState;
        return this;
    }

    async getPrompt(): Promise<string> {
        const manager = new EncryptionManager(this.context.workspaceState.get('masterkey'), this.context);
        const credentials = await manager.decryptAll();

        // mapping credentials to be and put into the credentialMap field while 
        // the labels
        const formattedCredentials = credentials.map((credential) => {
            const currentLabel = `${credential.email} (${credential.account})`;
            this.credentialMap[currentLabel] = credential;
            return currentLabel;
        });

        // created the window that will show the selector
        return vscode.window.showQuickPick(formattedCredentials, { canPickMany: this.multiSelect });
    }

    async shouldPromptBeRendered(): Promise<boolean> {
        // requires that the master password has been entered
        return await ensureMasterPasswordExists(this.context);
    }

    async postPromptRender(
        credentialLabel: string | string[],
        currentAggregate: objectAggregate
    ): Promise<boolean> {

        // since there is a multi-select option, there are two
        // seperate post processes that could be done
        if (typeof credentialLabel === 'string') {
            return await this.continueAsString(credentialLabel, currentAggregate);
        }
        return await this.continueAsArray(credentialLabel, currentAggregate);
    }

    private async continueAsString(credentialLabel: string, currentAggregate: objectAggregate) {

        // adds the encrypted plaintext to the aggregate object
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

        // loops and adds the encrypted plaintext to an array in the aggregate object
        currentAggregate.credentials = credentialLabels.map((credentialLabel) => {
            return manager.getName(this.credentialMap[credentialLabel]);
        });

        return false;
    }

}