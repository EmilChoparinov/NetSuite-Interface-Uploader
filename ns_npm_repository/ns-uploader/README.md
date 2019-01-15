*folder uploader based on suitetalk4node*

It is very straight forward, the only thing worth to mention is that for performance, we use addlist netsuite operation to add files and folders so we only iterate by 'levels'

#Using the command line client

    nsuploader TODO

#Using js api

    TODO

#Implementation notes
In this project we have implemented the folder upload algorithm using several techniques. 

The current one is *impl_upsertList2* that uses upsertlist operation considering the manifest. 

Other old implementations are : 
 * addlist : goes folder by folder and uses addlist operation on files. precondition: target folder must be empty. This is faster but has the restriction: each folder first-level files cannot weight more than 100mb in total.
 * add: it upload file by file. precondition: target folder must be empty. Restriction is minimal: each file cannot weight more than 100mb. 
 * add_update: the same as add but first it checks if the file already exists and in that case update its content. Preconditions: none. This is the one should be used for 'gulp deploy'. 

#Changes

 * add support for addList when uploading files
 * add support for add adding file by file - slow but safe - only limit: each file cannot be larger than 100mb
 * inplemented definitive - single - implementation based on upsertlist operation

#TODO
 * include / excludes blobs



#QA 

the current implementation of ns-uploader, implUpsertList2 should support the following scenarios:

 * deploy in a live/production site - because we use upsert, existing files are updated - this is supposed to be atomic operation well suited for updating live sites in production.

 * manifest not updated deploy once, remove a folder, deploy again  - because upsert operation will add the record if not exists

 * deploy to an empty folder

 * deploy, remove manifest, deploy again - well files are uploaded again - fact of life - we don't have a manifest



situations that we are not sure what happens: 

 * an empty folder with a 'fake' manifest

 * deploy, remove a folder entry from the manifest, change something inside that folder, deploy again
