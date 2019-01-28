import { PromptSeries } from "../prompt";
import { EmailPrompt } from "./email";
import { PasswordPrompt } from "./password";
import { Role as RolePrompt } from "./role";

export const addAccountSeries = async () => {
    return await new PromptSeries()
        .next(new EmailPrompt())
        .next(new PasswordPrompt())
        .next(new RolePrompt())
        .run();
};