import { Prompt } from "../prompt";
import { window } from "vscode";

export class EmailPrompt extends Prompt {
    async showPrompt(): Promise<boolean> {
        return true;
    }

    prompt(): Thenable<string> {
        return window.showInputBox({
            prompt: 'Enter the Email:',
            ignoreFocusOut: true
        });
    }

    async continue(email: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.email = email;
        return false;
    }

}