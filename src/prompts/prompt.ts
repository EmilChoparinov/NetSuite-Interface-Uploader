export abstract class Prompt {

    success = true;
    answer: string;

    abstract async continue(answer: string): Promise<boolean>;
    abstract prompt(): Thenable<string>;
    abstract async showPrompt(): Promise<boolean>;

    async runPrompt() {
        if (await this.showPrompt()) {
            this.answer = '';
            do {
                this.answer = await this.prompt();
                if (this.answer === undefined) {
                    this.success = false;
                    break;
                }
            } while (await this.continue(this.answer));
        }
        return this.success;
    }
}