import { Prompt } from "../prompt";
import { window } from "vscode";

export class ConfirmPurgePrompt extends Prompt<{}> {
    async shouldPromptBeRendered(): Promise<boolean> {
        return true;
    }

    getPrompt(): Thenable<string> {
        return window.showQuickPick(['Yes', 'No'], {
            placeHolder: 'This process will make recovery impossible. Continue?'
        });
    }

    async postPromptRender(confirmation: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.confirmation = confirmation;

        if (confirmation === 'No') { window.showInformationMessage('Purge Cancelled'); }
        return false;
    }

    onCancelled() {
        window.showInformationMessage('Purge Cancelled');
    }


}