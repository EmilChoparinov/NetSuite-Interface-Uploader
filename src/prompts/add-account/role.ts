import { Prompt } from "../prompt";
import { window } from "vscode";

import { Util } from 'node-suitetalk';

export class Role extends Prompt {

    util: any;
    loginOptionsRaw: any[];
    loginOptionsByLabel: { [label: string]: any } = {};
    constructor() {
        super();
        this.util = new Util();
    }

    async showPrompt(): Promise<boolean> {
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

    async prompt(currentAggregate: { [name: string]: string; }): Promise<string> {
        const loginPromise = new Promise<any[]>((resolve, reject) => {
            this.util.getLoginOptions({
                email: currentAggregate.email,
                password: currentAggregate.password
            }, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            });
        });

        loginPromise.catch((stuff) => { console.log(stuff); });

        const loginOptions = await loginPromise;
        this.loginOptionsRaw = loginOptions;

        return window.showQuickPick(this.generateLabels());
    }

    async continue(label: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.roleId = this.loginOptionsByLabel[label].role.internalId;
        aggregate.account = this.loginOptionsByLabel[label].account.internalId;
        return false;
    }

}