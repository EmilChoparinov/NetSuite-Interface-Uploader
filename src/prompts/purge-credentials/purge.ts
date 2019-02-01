import { Prompt } from "../prompt";
import { window, ExtensionContext } from "vscode";

import { join } from "path";
import { deactivate } from "../../extension";
import { SelectAccountPrompt } from "../select-account";
import { EncryptionManager } from "../../password-encryption-manager";
import rimraf = require("rimraf");

export class PurgePrompt extends Prompt<objectAggregate> {

    context: ExtensionContext;
    constructor(context: ExtensionContext) {
        super();
        this.context = context;
    }

    async shouldPromptBeRendered(aggregate: objectAggregate): Promise<boolean> {

        // dont allow a purge if there are no credentials
        const accountCount = await EncryptionManager.getSize(this.context);
        if (accountCount < 1) {
            window.showInformationMessage('There are no credentials stored.');
            return false;
        }

        // if purgall was selected, purge all the data stored
        if (aggregate.purgeAll) {
            await this.purgeAll().catch((e) => {
                console.log('ERROR', e);
            });
            deactivate(this.context);
            this.context.workspaceState.update('credential', undefined);
            window.showInformationMessage(
                'All credentials purged successfully.',
                'Close'
            );
            return false;
        }
        return true;
    }

    /**
     * purges the manager folder
     */
    private purgeAll() {
        return new Promise((resolve, reject) => {
            rimraf(join(__dirname, '../../../manager'), (err) => {
                if (err) { return reject(err); }
                else { resolve(); }
            });
        });
    }


    getPrompt(aggregate: objectAggregate): Thenable<string> {

        // if the prompt should be rendered, then it must be for selecting 
        // specific accounts
        const selectAccount = new SelectAccountPrompt(this.context);
        selectAccount.setMulti(true);

        return new Promise<string>(resolve => {

            // run the prompt and return the credentials for the post prompt 
            // render to use
            selectAccount.runPrompt(aggregate).then(() => {
                resolve(aggregate.credentials);
            });
        });
    }

    async postPromptRender(selections: string[], aggregate: objectAggregate): Promise<boolean> {

        // create the manager and remove all the accounts that have been selected
        const manager = new EncryptionManager(this.context.workspaceState.get('masterkey'), this.context);
        selections.forEach(async account => {
            // removes the account
            const deletedCredentials = await manager.removeAccount(account);

            //ensures that if the account you removed was the currently active 
            // one, delete it
            const decypheredDeletedCredentials =
                manager.getDecipheredText(deletedCredentials);

            const decypheredActiveCredentials =
                manager.getDecipheredText(
                    this.context.workspaceState.get('credential')
                );


            if (decypheredActiveCredentials === decypheredDeletedCredentials) {
                this.context.workspaceState.update('credential', undefined);
            }
        });

        window.showInformationMessage(
            `${selections.length} account(s) purged successfully.`,
            'Close'
        );

        return false;
    }

}