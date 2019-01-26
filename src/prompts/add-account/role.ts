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

        // for each option, general a label and map it to the loginOptionsLabel field
        const mappedLabels = this.loginOptionsRaw.map((option) => {

            // generate the label
            const label = `${option.account.type}: ${option.role.name} (${option.account.internalId})`;
            
            // map the label to the credential option
            this.loginOptionsByLabel[label] = option;
            return label;
        });

        return mappedLabels;
    }

    async getPrompt(currentAggregate: { [name: string]: string; }): Promise<string> {
        const loginPromise = new Promise<any>((resolve, reject) => {

            // get the role options from NetSuite
            this.util.getLoginOptions({
                email: currentAggregate.email,
                password: currentAggregate.password
            }, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            });
        });

        // if there is an error, show the error
        loginPromise.catch(async (err) => {
            window.showErrorMessage('Error Occured', 'Close');
            await openFile(JSON.stringify(err, null, 4));
        });

        // wait for the options to go through
        const loginOptions = await loginPromise;

        // if there is an error, show the error message and stop the process
        if (loginOptions.error) {
            window.showErrorMessage(loginOptions.error.message, 'Close');
            return;
        }

        this.loginOptionsRaw = loginOptions;

        // generate the selector for the roles
        return window.showQuickPick(this.generateLabels(), {
            placeHolder: 'SCDeployer / Developer Role'
        });
    }

    async postPromptRender(label: string, aggregate: objectAggregate): Promise<boolean> {

        // aggregate the roleId and account id
        aggregate.roleId = this.loginOptionsByLabel[label].role.internalId;
        aggregate.account = this.loginOptionsByLabel[label].account.internalId;
        return false;
    }

}