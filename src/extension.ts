import * as vscode from 'vscode';
import { readdirSync } from 'fs';
import { join } from 'path';

export const activate = (context: vscode.ExtensionContext) => {
	console.log('Congratulations, your extension "netsuite-interface-uploader" is now active!');
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

	console.log('NSI Loaded all commands');
	vscode.window.showInformationMessage('NSI Loaded');
};

export const deactivate = (context: vscode.ExtensionContext) => {
	context.globalState.update('masterkey', null);
};