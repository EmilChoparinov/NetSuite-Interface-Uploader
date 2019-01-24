import { PromptSeries } from "../prompt";
import { window, ExtensionContext } from "vscode";
import { ConfirmPurgePrompt } from "./confirm";
import { IsPurgeAllPrompt } from "./is-purge-all";
import { PurgePrompt } from "./purge";

export const purgeCredentialsSeries = async (context: ExtensionContext) => {
    return await new PromptSeries()
        .next(new ConfirmPurgePrompt())
        .next(new IsPurgeAllPrompt())
        .next(new PurgePrompt(context))
        .run();
};