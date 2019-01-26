import { workspace, window } from "vscode";

export const openFile = async (content: string) => {
    const document = await workspace.openTextDocument({
        language: 'json',
        content: content
    });

    return await window.showTextDocument(document);
};