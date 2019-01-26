import { Prompt } from "../prompt";
import { window } from "vscode";

import { Util } from 'node-suitetalk';
import { openFile } from "../../utils/open-file";

export class Role extends Prompt<objectAggregate> {

    util: any;
    loginOptionsRaw: any[];
    loginOptionsByLabel: { [label: string]: any } = {};
    constructor() {
        super();
        this.util = new Util();
    }

    async shouldPromptBeRendered(): Promise<boolean> {
        return true;
    }

    generateLabels() {
        const mappedLabels = this.loginOptionsRaw.map((option) => {
            const label = `${option.account.type}: ${option.role.name} (${option.account.internalId})`;
            this.loginOptionsByLabel[label] = option;
            return label;
        });

        return mappedLabels;
    }

    async getPrompt(currentAggregate: { [name: string]: string; }): Promise<string> {
        const loginPromise = new Promise<any>((resolve, reject) => {
            this.util.getLoginOptions({
                email: currentAggregate.email,
                password: currentAggregate.password
            }, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            });
        });

        loginPromise.catch(async (err) => {
            await openFile(JSON.stringify(err, null, 4));
        });

        const loginOptions = await loginPromise;

        if (loginOptions.error) {
            window.showErrorMessage(loginOptions.error.message, 'Close');
            return;
        }

        this.loginOptionsRaw = loginOptions;

        return window.showQuickPick(this.generateLabels(), {
            placeHolder: 'SCDeployer / Developer Role'
        });
    }

    async postPromptRender(label: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.roleId = this.loginOptionsByLabel[label].role.internalId;
        aggregate.account = this.loginOptionsByLabel[label].account.internalId;
        return false;
    }

}