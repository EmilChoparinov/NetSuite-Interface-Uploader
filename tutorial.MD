# NSI Getting Started Tutorial

Welcome to NSI, this extension allows you to upload SuiteScripts seamlessly to a NetSuite account of you choosing.

## Getting an Account Stored to be used

There are two things that need to happen in this order for you to be able to upload your SuiteScript documents:

1. Add the NetSuite account credentials
2. Select which credential you want to use out of the accounts added

To add an account, please use this command through the command palette `NSI: Add Account`. The first thing you will see 
will be a 'Enter Master Password' prompt. This prompt will be used to encrypt all the credentials you give locally. The 
master password entered is not stored as well and is immediately hashed through SHA-256.

You will only ever need to tell your master password once per VSCode session

### **NOTE: that if you loose or forget this password, credential recovery is not possible**

Now a series of prompts will go up that will ask you basic login information and selecting a role.

## Selecting an Account for your Workspace

This extension supports the use of multiple accounts being used at once. Each workspace you have open in VSCode can be 
tied back to which NetSuite account files should be uploaded to.

To select an account to be used in your current workspace, run the command `NSI: Select Account`. If you have started
a new VSCode session you will be asked to re-enter your master password. Select out of the list which account you want 
to use.

## Uploading NetSuite Files

Now that you have an account added and the account selected, you can upload a file through many ways:

1. You can run the command `NSI: Upload File` from the command palette
2. You can right click on a js document and click upload
3. doing `CTRL + SHIFT + U` or `CTRL + U` will run the upload command

If you are missing some of the aspects that are required, the extension will automatically know whats missing and ask
you to enter if before continuing.

## Editing Credentials of A Given NetSuite Account

Currently only direct JSON editing is supported. Run the `NSI: Edit Account` command and select which account to edit. 
This also may require a master password depending on your current session

## Removing NetSuite Credentials

You can remove credentials that you have entered using the `NSI: Purge Credentials` command. 

#### Without Master Password

When running this command select `Purge All` and it will remove two things:

1. All the credentials you have entered
2. Your master password

This will essentially reset the extensions credential data that you have given

#### With Master Password

When running this command if you selected `Purge Specific Account` you will be able to select which set of credentials 
to remove and it will remove them from the extension.
