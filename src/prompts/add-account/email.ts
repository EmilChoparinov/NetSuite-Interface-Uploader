import { Prompt } from "../prompt";
import { window } from "vscode";

export class EmailPrompt extends Prompt<objectAggregate> {
    async shouldPromptBeRendered(): Promise<boolean> {
        return true;
    }

    getPrompt(): Thenable<string> {
        return window.showInputBox({
            prompt: 'Enter the Email:',
            ignoreFocusOut: true
        });
    }

    async postPromptRender(email: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.email = email;
        return false;
    }

}