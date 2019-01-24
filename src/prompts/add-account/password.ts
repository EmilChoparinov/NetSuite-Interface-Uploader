import { Prompt } from "../prompt";
import { window } from "vscode";

export class PasswordPrompt extends Prompt<objectAggregate> {


    getPrompt(): Thenable<string> {
        return window.showInputBox({
            prompt: 'Specific Account\'s Password:',
            password: true,
            ignoreFocusOut: true
        });
    }
    async shouldPromptBeRendered(): Promise<boolean> {
        return true;
    }

    async postPromptRender(answer: string, aggregate: objectAggregate): Promise<boolean> {
        aggregate.password = answer;
        return false;
    }

}