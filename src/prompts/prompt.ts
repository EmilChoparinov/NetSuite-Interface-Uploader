export abstract class Prompt {

    text: string | string[];
    name: string;
    success = true;

    abstract async continue(answer: string | string[], currentAggregate: objectAggregate): Promise<boolean>;
    abstract prompt(currentAggregate: objectAggregate): Thenable<string>;
    abstract async showPrompt(): Promise<boolean>;

    public async runPrompt(currentAggregate: objectAggregate) {
        this.success = await this.showPrompt();

        if (this.success) {
            this.text = '';

            do {
                this.text = await this.prompt(currentAggregate);
                if (this.text === undefined) {
                    this.success = false;
                    break;
                }

            } while (await this.continue(this.text, currentAggregate));
        }

        return this.success;
    }
}

export class PromptSeries {

    series: Prompt[] = [];
    public next(prompt: Prompt): PromptSeries {
        this.series.push(prompt);
        return this;
    }

    public async run(): Promise<{ success: boolean, capturedData: objectAggregate }> {
        const objectAggregate: objectAggregate = {};
        let success = true;

        for (let currentPrompt of this.series) {
            const isPromptSuccessful = await currentPrompt.runPrompt(objectAggregate);

            if (!isPromptSuccessful) {
                success = false;
                break;
            }
        }

        return {
            success,
            capturedData: objectAggregate
        };
    }
}