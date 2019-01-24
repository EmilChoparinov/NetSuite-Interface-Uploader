export abstract class Prompt<T> {

    text: string | string[];
    name: string;
    success = true;

    abstract async postPromptRender(answer: string | string[], currentAggregate: T): Promise<boolean>;
    abstract getPrompt(currentAggregate: T): Thenable<string>;
    abstract async shouldPromptBeRendered(currentAggregate: T): Promise<boolean>;

    public async runPrompt(currentAggregate: T) {
        this.success = await this.shouldPromptBeRendered(currentAggregate);

        if (this.success) {
            this.text = '';

            do {
                this.text = await this.getPrompt(currentAggregate);
                if (this.text === undefined) {
                    this.onCancelled(currentAggregate);
                    this.success = false;
                    break;
                }

            } while (await this.postPromptRender(this.text, currentAggregate));
        }

        return this.success;
    }

    public onCancelled(currentAggregate: T) { }
}

export class PromptSeries<T> {

    series: Prompt<T>[] = [];
    public next(prompt: Prompt<T>): PromptSeries<T> {
        this.series.push(prompt);
        return this;
    }

    public async run(): Promise<{ success: boolean, capturedData: T }> {
        const objectAggregate: T = {} as T;
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