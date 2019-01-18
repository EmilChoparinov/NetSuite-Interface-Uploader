import { AES, SHA256, enc } from 'crypto-js';
import { ExtensionContext } from 'vscode';

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

    // VSCode extensions context to save encrypted data into VSCode
    private context: ExtensionContext;
    constructor(masterPassword: string, context: ExtensionContext) {
        this.key = SHA256(masterPassword).toString();
        this.context = context;
    }

    /**
     * non-checking data encrytion method. If you wish to check before
     * doing an overwrite used the `accountAlreadyExists` method
     * 
     * @param account the account data you want to encrypt
     */
    public encrypt(account: credentials) {

        // stringify the credentials to prepare for AES encryption
        const jsonCredentials = JSON.stringify(account);

        // encrypt and retrive the Utf8 encrypted cipher
        const cipherText = AES.encrypt(jsonCredentials, this.key).toString();

        // generate a unique has based on the unique combiniation of data from 
        // the given credentials
        const uniqueCipherId = this.getName(account);

        // insert the cipher into the state object
        this.context.globalState.update(uniqueCipherId, cipherText);

        // update the account listing for internal access
        this.updateAccountListing(account);
    }

    /**
     * decrypts all the keys associated with this specific master password
     */
    public decryptAll() {

        // get a list of all the accounts entered into VSCodes storage
        const accountIds: accountNames = this.context.globalState.get('accounts');

        // array of decryption objects containing netsuite credentials 
        const decryptionData: credentials[] = [];
        accountIds.ids.forEach(

            // for each name in the list, decrypt and push the object into the
            // array
            id => {

                // get the decrypted object in plaintext string
                const plainTextDecryption = this.decrypt(id);

                // if the plaintext is returned and is not of length 0, then 
                // that means that it is successfully decrypted
                if (plainTextDecryption.length !== 0) {

                    // parse into a js object
                    const decyptedData: credentials = JSON.parse(plainTextDecryption);
                    decryptionData.push(decyptedData);
                }
            }
        );

        return decryptionData;
    }

    /**
     * decrypts a singular account based on its unique hash id
     * 
     * @param accountId unique name of the account
     */
    private decrypt(accountId: string) {

        // get the encrypted data as a string
        const encrypedData: string = this.context.globalState.get(accountId);
        const plainTextDecryption =

            // use AES decryption method to decrypt to proper set of bytes
            AES.decrypt(encrypedData, this.key)

                // declare to use toString using the Utf8 encode property to
                // get the json in a readible format
                .toString(enc.Utf8);

        return plainTextDecryption;
    }

    /**
     * verification method if the current password is proper to decode
     * 
     * **NOTE: THIS ONLY WORKS IF THERE IS A SINGLE MASTER PASSWORD**
     */
    public verifyMasterPassword() {

        // gets all the names of the accounts
        const accountIds: accountNames = this.context.globalState.get('accounts');

        // if the length of accounts is 0, then that means there is nothing
        // to decrypt, therefore just return true
        if (accountIds.ids.length === 0) { return true; }

        // get one of them
        const accountId = accountIds.ids.pop();

        // decrypt to plaintext
        const plainTextDecryption = this.decrypt(accountId);

        // if the decyption was successful, then it returns a string greater
        // than 0
        return plainTextDecryption.length !== 0;
    }

    /**
     * generate a unique name id using SHA
     * 
     * @param account account object full of credentials
     */
    private getName(account: credentials) {
        return SHA256(account.email + account.roleId + account.account).toString();
    }

    /**
     * update account listings object to keep track of all declared credentials
     * 
     * @param account accunt object full of credentials
     */
    private updateAccountListing(account: credentials) {
        const hasAccounts = !!this.context.globalState.get('accounts');

        if (hasAccounts) {
            const accountIds: accountNames = this.context.globalState.get('accounts');
            accountIds.ids.push(this.getName(account));
            this.context.globalState.update('accounts', accountIds);
        } else {
            const accountIds: accountNames = {
                ids: [this.getName(account)]
            };

            this.context.globalState.update('accounts', accountIds);
        }
    }

    /**
     * checks if the current given account exists
     * 
     * @param account account full of credentials
     */
    public accountAlreadyExists(account: credentials) {
        const accountCipher = this.getName(account);
        const storedData = this.context.globalState.get(accountCipher);
        return !!storedData;
    }
}