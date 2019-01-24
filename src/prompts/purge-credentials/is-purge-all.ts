import { Prompt } from "../prompt";
import { window } from "vscode";

export class IsPurgeAllPrompt extends Prompt<objectAggregate> {
    async shouldPromptBeRendered(aggregate: objectAggregate): Promise<boolean> {
        return aggregate.confirmation === 'Yes';
    }

    getPrompt(): Thenable<string> {
        return window.showQuickPick(['Purge Specific Accounts', 'Purge All'], {
            placeHolder: 'Purge All (requires no password) or Purge Specific Accounts (requires password)?'
        });
    }

    async postPromptRender(purgeType: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.purgeAll = purgeType === 'Purge All' ? true : false;
        return false;
    }

}