// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('quote-swapper.swap-quotes', () => {

		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = editor.document.getText(selection);
		let newText = '';

		for (let i = 0; i < text.length; i++) {
			const character = text[i];

			if (character === "'") {
				newText += '"';
			} else if (character === '"') {
				newText += "'";
			} else {
				newText += character;
			}
		}

		editor.edit((editBuilder) => {
			editBuilder.replace(selection, newText);
		});

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
