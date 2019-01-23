
import { writeFile, readFile, existsSync, mkdirSync, writeFileSync } from 'fs';
import { ExtensionContext } from 'vscode';

export class StorageManager {

    context: ExtensionContext;
    constructor(context: ExtensionContext) {
        this.context = context;
        this.ensureBaseExists();
    }

    private ensureBaseExists() {
        const path = this.context.asAbsolutePath('manager');
        const isPathExists = existsSync(path);
        if (isPathExists) { return true; }
        mkdirSync(path);
    }

    public getFile(filename: string): Promise<string> {
        return new Promise((resolve, reject) => {
            readFile(
                this.context.asAbsolutePath(`./manager/${filename}`),
                (err, data) => {
                    return (data) ? resolve(data.toString('utf8')) : resolve('');
                }
            );
        });
    }

    public updateFile(filename: string, stringData: string) {
        return new Promise((resolve) => {
            writeFile(
                this.context.asAbsolutePath(`./manager/${filename}`), stringData,
                (err) => {
                    resolve();
                }
            );
        });
    }
}