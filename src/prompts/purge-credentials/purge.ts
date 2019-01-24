import { Prompt } from "../prompt";
import { window, ExtensionContext } from "vscode";

import { join } from "path";
import { deactivate } from "../../extension";
import { SelectAccountPrompt } from "../select-account";
import { resolve } from "url";
import { EncryptionManager } from "../../password-encryption-manager";
import rimraf = require("rimraf");

export class PurgePrompt extends Prompt<objectAggregate> {

    context: ExtensionContext;
    constructor(context: ExtensionContext) {
        super();
        this.context = context;
    }

    async shouldPromptBeRendered(aggregate: objectAggregate): Promise<boolean> {
        if (aggregate.purgeAll) {
            await this.purgeAll().catch((e) => {
                console.log('ERROR', e);
            });
            deactivate(this.context);
            window.showInformationMessage('All Credentials Purged Successfully');
        }
        return true;
    }

    private purgeAll() {
        return new Promise((resolve, reject) => {
            rimraf(join(__dirname, '../../../manager'), (err) => {
                if (err) { return reject(err); }
                else { resolve(); }
            });
        });
    }

    getPrompt(aggregate: objectAggregate): Thenable<string> {
        const selectAccount = new SelectAccountPrompt(this.context);
        selectAccount.setMulti(true);

        return new Promise<string>(resolve => {
            selectAccount.runPrompt(aggregate).then(() => {
                resolve(aggregate.credentials);
            });
        });
    }

    async postPromptRender(selections: string[], aggregate: objectAggregate): Promise<boolean> {
        const manager = new EncryptionManager(this.context.workspaceState.get('masterkey'), this.context);
        selections.forEach(async account => {
            await manager.removeAccount(account);
        });
        return false;
    }

}