/**
 * Abstract Prompt Class abstract the complexity of having to deal with a sequence
 * of prompts by dividing the tasks to before, now, and after.
 */
export abstract class Prompt<T> {

    // the answer from the user that was recieved
    text: string | string[];

    // if the prompt finished running successfully
    success = true;

    /**
     * function that runs afer the prompt is done rendering
     * 
     * @param answer user received input
     * @param currentAggregate object with all the important data so far
     */
    abstract async postPromptRender(answer: string | string[], currentAggregate: T): Promise<boolean>;

    /**
     * function that runs currently while the prompt is being rendered
     * 
     * @param currentAggregate object with all the important data so far
     * 
     * @returns a prompt, promise, or thenable object that returns a string 
     * or string array
     */
    abstract getPrompt(currentAggregate: T): Thenable<string | string[]>;

    /**
     * runs post completion of the event
     * 
     * @param currentAggregate object with all the important data so far
     * 
     * @returns a boolean. true if the prompt should be rendered again,
     * false if it is complete and done rendering
     */
    abstract async shouldPromptBeRendered(currentAggregate: T): Promise<boolean>;

    /**
     * runs the prompt routine
     * 
     * @param currentAggregate object with all the important data so far
     */
    public async runPrompt(currentAggregate: T) {

        // get the success boolean of the prompt being rendered
        this.success = await this.shouldPromptBeRendered(currentAggregate);

        // if its successful then continue with the while loop
        if (this.success) {
            this.text = '';

            // while the prompt is incorrect, keep asking the user
            do {

                // get the next text
                this.text = await this.getPrompt(currentAggregate);

                // if the text is undefined, that means that the user hit the 
                // escape key or focused out. So kill the loop
                if (this.text === undefined) {

                    // run the on cancelled event
                    this.onCancelled(currentAggregate);
                    this.success = false;
                    break;
                }

                // while a new prompt is recieved, continue to run the post 
                // process again
            } while (await this.postPromptRender(this.text, currentAggregate));
        }

        return this.success;
    }

    /**
     * event function that runs when the prompt is cancelled
     * 
     * @param currentAggregate object with the important info so far
     */
    public onCancelled(currentAggregate: T) { }
}

/**
 * class that creates a series of prompt to be rendered and runs them in the
 * specified order
 * 
  ```js
 const dataRetrieved =
    // instaniating a new prompt series is simple, you can chain the
    // 'next' method for convenience
    new PromptSeries()

        // add prompts in order like so
        .next(new Prompt())
        .next(new Prompt2())
        .next(new Prompt3())
        
        // run all the prompts, aggregate the data
        // and return them from running this command
        .run();
```
 */
export class PromptSeries<T> {

    private series: Prompt<T>[] = [];
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