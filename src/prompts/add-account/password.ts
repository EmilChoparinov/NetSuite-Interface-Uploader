import { Prompt } from "../prompt";
import { window } from "vscode";

export class PasswordPrompt extends Prompt {

    prompt(): Thenable<string> {
        return window.showInputBox({
            prompt: 'Specific Account\'s Password:',
            password: true
        });
    }
    async showPrompt(): Promise<boolean> {
        return true;
    }

    continue(answer: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}