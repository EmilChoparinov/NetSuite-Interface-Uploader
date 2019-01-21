import { Prompt } from "../prompt";
import { window } from "vscode";
import { PasswordPrompt } from "./password";

export class AddAccountSeries extends Prompt {

    async showPrompt(): Promise<boolean> {
        return true;
    }

    prompt(): Thenable<string> {
        return window.showInputBox({
            prompt: 'Enter the Email:'
        });
    }

    async continue(email: string): Promise<boolean> {
        await new PasswordPrompt().runPrompt();
        return false;
    }

}