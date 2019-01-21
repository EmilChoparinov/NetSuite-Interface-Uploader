export abstract class Prompt {

    success = true;

    abstract async continue(answer: string): Promise<boolean>;
    abstract prompt(): Thenable<string>;
    abstract async showPrompt(): Promise<boolean>;

    async runPrompt() {
        if (await this.showPrompt()) {
            let answer: string;
            do {
                answer = await this.prompt();
                if (answer === undefined) {
                    this.success = false;
                    break;
                }
            } while (await this.continue(answer));
        }
        return this.success;
    }
}