[![](https://img.shields.io/badge/Author-RSM%20US-ff5e99.svg)](https://github.com/ExploreConsulting)
[![](https://img.shields.io/badge/Repository-NetSuite%20Interface%20Uploader-5ea6ff.svg)](https://github.com/ExploreConsulting/NetSuite-Interface-Uploader)

![](https://img.shields.io/github/issues/ExploreConsulting/NetSuite-Interface-Uploader.svg)
![](https://img.shields.io/github/stars/ExploreConsulting/NetSuite-Interface-Uploader.svg)
![](https://img.shields.io/github/license/ExploreConsulting/NetSuite-Interface-Uploader.svg)

# NetSuite Interface Uploader

This extension allows you to quickly upload SuiteScript documents to NetSuite. It also contains features that seamlessly allows you to switch quickly between a set of NetSuite accounts at anytime. All accounts entered are also encrypted with AES.

## Features

### Usage Walkthrough

A tutorial command that walks you through the setup and usage of this extension. Helps you set your master password, add NetSuite credentials, select them, then upload.

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

Check [issues](https://github.com/EmilChoparinov/NetSuite-Interface-Uploader/issues)

## Release Notes

## 0.3.2 - 2018-01-28 
### Added
- Support for editing available molecules

## 0.3.1 - 2018-01-28 
### Added
- Upload In Progress message on file upload

### Changed
- Tutorial command less 'in your face' about it

## 0.3.0 - 2018-01-28 
### Changed
- Encryption to not carry over

## 0.2.0 - 2018-01-28 
### Added
- Tutorial Command

## 0.1.0 - 2018-01-25
### Added
- Add Acount (create)
- Select Account (review)
- Edit Account (update)
- Purge Credentials (delete)
- Upload File