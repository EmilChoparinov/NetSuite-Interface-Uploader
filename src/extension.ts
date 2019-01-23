import * as vscode from 'vscode';
import { readdirSync } from 'fs';
import { join } from 'path';

export const activate = (context: vscode.ExtensionContext) => {
	deactivate(context);
	readdirSync(
		join(__dirname, './commands')
	)
		.filter((commandFile) => !commandFile.includes('.map'))
		.forEach((commandFile) => {
			const command = require(
				join(__dirname, `./commands/${commandFile}`)
			);

			command.runCommand(context);
		});

	vscode.window.showInformationMessage('NSI Loaded');
};

export const deactivate = (context: vscode.ExtensionContext) => {
	context.workspaceState.update('masterkey', undefined);
	context.workspaceState.update('credential', undefined);
};