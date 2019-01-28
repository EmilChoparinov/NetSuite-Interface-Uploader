# netsuite-interface-uploader README

This extension allows you to quickly upload SuiteScript documents to NetSuite. It also contains features that seamlessly allows you to switch quickly between a set of NetSuite accounts at anytime. All accounts entered are also encrypted with AES.

## Features

### Adding Accounts

Add accounts through the 'Add Account' command. A wizard will appear which asks you to enter your master password for this current session if not entered yet, then proceeds to ask the information needed to upload.

### Edit Account

Edit a specific account through the 'Edit Account' command. This will give you a the ability to select a specific account, which it will then decrypt for you and open it in a new window. Once you're done editing, NSI will automatically replace the old account with your changes.

### Purge Credentials

Remove the credentials that are currently stored in the computer. It allows you to delete all credentials stored or you can select a couple to remove. Selecting a couple will display data about the credentials so it will require the passkey.

### Select Account

Select the Account you want to use *within your current workspace* with the 'Select Account' command. You can have multiple different workspaces active with all different NetSuite accounts being used. Once you have selected the account to use, you can start uploading a file.

### Upload File

Upload the current file you have open with the 'Upload File' command. This will start a process in which whatever you have currently open in front of you will upload to NetSuite with the name being the files name.

-----------------------------------------------------------------------------------------------------------

## Requirements

In order for the uploader to work, *you must have uploading permissions on your role or a deployer role*. For information on how to create this role, view [this article](https://developers.suitecommerce.com/section1536122387#subsect1536120034).

## Known Issues


## Release Notes

## 0.0.2 - 2018-01-28 
### Added
- Tutorial Command

## 0.0.1 - 2018-01-25
### Added
- Add Acount (create)
- Select Account (review)
- Edit Account (update)
- Purge Credentials (delete)
- Upload File