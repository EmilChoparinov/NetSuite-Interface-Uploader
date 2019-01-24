import { AES, SHA256, enc } from 'crypto-js';
import { ExtensionContext } from 'vscode';
import { StorageManager } from './storage-manager';

/**
 * Class representing an interface between VSCodes context objects and the
 * encryption process
 * 
 * example of using this manager:
 * 
 ```js
 const manager =
    // instaniating a new manager is simple, give the password and the context
    // so that vscode and store those objects for you intead of conventional 
    // storage (psuedo-secure more secure harder to get to)
    new EncryptionManager('my unique master password', null);

// use this method to verify the password is the same as the one that was used
// you **can** still encrypt into the directory with another password if you
// need to
if (manager.verifyMasterPassword()) {
    
    // the data object to encrypt here:
    manager.encrypt({
        email: 'email to netsuite',
        password: 'password to log in',
        roleId: 'role id',
        account: 'netsuite account number'
    });

    // returns all the decrypted objects for that specific password
    const specificCredential = manager.decryptAll()
        .find((credential) => credential.email === 'email to netsuite');
}
 ```
 */
export class EncryptionManager {

    // SHA256 key that will be used to decrypt credentials
    public key: string;

    // external manager to be used to to save encrypted data to the
    // file system instead of VSCodes extension
    private storageManager: StorageManager;
    constructor(masterPassword: string, context: ExtensionContext) {
        this.key = SHA256(masterPassword).toString();
        this.storageManager = new StorageManager(context);
    }

    /**
     * non-checking data encrytion method. If you wish to check before
     * doing an overwrite used the `accountAlreadyExists` method
     * 
     * @param account the account data you want to encrypt
     */
    public async encrypt(account: credentials) {

        const cipherText = this.getCipherText(account);

        // generate a unique has based on the unique combiniation of data from 
        // the given credentials
        const uniqueCipherId = this.getName(account);

        // insert the cipher into a file
        await this.storageManager.updateFile(uniqueCipherId, cipherText);

        // update the account listing for internal access
        await this.updateAccountListing(account);
        await this.updatePasswordListing();
    }

    /**
     * decrypts all the keys associated with this specific master password
     */
    public async decryptAll() {

        const accountsFile = await this.storageManager.getFile('accounts');

        // if the accounts file is empty then its really empty
        if (accountsFile.length === 0) { return []; }

        // get a list of all the accounts entered into VSCodes storage
        const accountIds: accountNames =
            JSON.parse(accountsFile);

        // array of decryption objects containing netsuite credentials 
        const decryptionData: credentials[] = [];

        // for each name in the list, decrypt and push the object into the
        // array
        for (let id of accountIds.ids) {

            // get the decrypted object in plaintext string
            const plainTextDecryption = await this.decrypt(id);

            // if the plaintext is returned and is not of length 0, then 
            // that means that it is successfully decrypted
            if (plainTextDecryption.length !== 0) {

                // parse into a js object
                const decyptedData: credentials = JSON.parse(plainTextDecryption);
                decryptionData.push(decyptedData);
            }
        }

        return decryptionData;
    }

    /**
     * decrypts a singular account based on its unique hash id
     * 
     * @param accountId unique name of the account
     */
    public async decrypt(accountId: string) {

        // get the encrypted data as a string
        const encrypedData = await this.storageManager.getFile(accountId);

        const plainTextDecryption = this.getDecipheredText(encrypedData);

        return plainTextDecryption;
    }

    public getCipherText(account: credentials) {
        // stringify the credentials to prepare for AES encryption
        const jsonCredentials = JSON.stringify(account);

        // encrypt and retrive the Utf8 encrypted cipher
        const cipherText = AES.encrypt(jsonCredentials, this.key).toString();

        return cipherText;
    }

    public getDecipheredText(cipher: string) {
        const plainTextDecryption =

            // use AES decryption method to decrypt to proper set of bytes
            AES.decrypt(cipher, this.key)

                // declare to use toString using the Utf8 encode property to
                // get the json in a readible format
                .toString(enc.Utf8);

        return plainTextDecryption;
    }

    /**
     * verification method if the current password is proper to decode
     * 
     */
    public async verifyMasterPassword() {

        const passwordsFile = await this.storageManager.getFile('passwords');

        // if the file does not exist and is empty, then that means there currently isn't a masterpassword
        // at all to use
        if (passwordsFile.length === 0) { return true; }

        const passwords: passwords =
            JSON.parse(passwordsFile);

        return !!passwords[this.key];
    }

    /**
     * generate a unique name id using SHA
     * 
     * @param account account object full of credentials
     */
    public getName(account: credentials) {
        return SHA256(account.email + account.roleId + account.account).toString();
    }

    /**
     * update account listings object to keep track of all declared credentials
     * 
     * @param account accunt object full of credentials
     */
    private async updateAccountListing(account: credentials) {
        let accounts = await this.storageManager.getFile('accounts');
        let accountIds: accountNames;

        if (!!accounts) {
            accountIds = JSON.parse(accounts);
            accountIds.ids.push(this.getName(account));
            this.storageManager.updateFile('accounts', JSON.stringify(accountIds));
        } else {
            accountIds = {
                ids: [this.getName(account)]
            };
        }

        this.storageManager.updateFile('accounts', JSON.stringify(accountIds));
    }

    public async updatePasswordListing() {
        let passwords = await this.storageManager.getFile('passwords');

        let nextPasswords: passwords;
        if (!!passwords) {
            nextPasswords = JSON.parse(passwords);
            nextPasswords[this.key] = true;
        } else {
            nextPasswords = {
                [this.key]: true
            };
        }

        this.storageManager.updateFile('passwords', JSON.stringify(nextPasswords));
    }

    /**
     * checks if the current given account exists
     * 
     * @param account account full of credentials
     */
    public async accountAlreadyExists(account: credentials) {
        const accountCipher = this.getName(account);
        const storedData = await this.storageManager.getFile(accountCipher);
        return !!storedData;
    }

    public async removeAccount(accountId: string) {
        await this.storageManager.removeFile(accountId);

        const accountListing = await this.storageManager.getFile('accounts');
        let parsedAccountListings: accountNames = JSON.parse(accountListing);
        parsedAccountListings.ids = parsedAccountListings.ids.filter(id => id !== accountId);

        this.storageManager.updateFile('accounts', JSON.stringify(parsedAccountListings));

    }
}