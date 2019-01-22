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

    async continue(answer: string): Promise<boolean> {
        return false;
    }

}