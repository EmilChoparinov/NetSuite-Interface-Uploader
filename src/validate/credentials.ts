import { window } from "vscode";

export const credentialsValidator = (credentials: string) => {
    let parsedCredentials: credentials;
    try {
        parsedCredentials = JSON.parse(credentials);
    } catch (e) {
        window.showErrorMessage('Edited credentials were not valid JSON. Retry the edit');
        return false;
    }

    const missingProperties = [];

    if (!parsedCredentials.email) {
        missingProperties.push('email');
    }

    if (!parsedCredentials.password) {
        missingProperties.push('password');
    }

    if (!parsedCredentials.roleId) {
        missingProperties.push('roleId');
    }

    if (!parsedCredentials.account) {
        missingProperties.push('account');
    }

    if (missingProperties.length !== 0) {
        window.showErrorMessage('edited credentials missing required values: ' + missingProperties.join(', '));
        return false;
    }

    return true;

};