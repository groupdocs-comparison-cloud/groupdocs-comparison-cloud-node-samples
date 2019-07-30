"use strict";
global.groupdocs_comparison_cloud_1 = require("groupdocs-comparison-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-comparison-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Comparison Cloud API Examples
//// ***********************************************************
//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX";
global.appKey = "XXXXXXXXXXXXXXXXXXXX";
global.myStorage = "XXXXX";

// construct CompareApi
global.compareApi = groupdocs_comparison_cloud_1.CompareApi.fromKeys(appSid, appKey);

// construct InfoApi
global.infoApi = groupdocs_comparison_cloud_1.InfoApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = groupdocs_comparison_cloud_1.StorageApi.fromKeys(appSid, appKey);

// construct FolderApi
global.folderApi = groupdocs_comparison_cloud_1.FolderApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = groupdocs_comparison_cloud_1.FileApi.fromKeys(appSid, appKey);

// Uploading sample test files from local to storage under folder 'Comparisondocs'
//console.log("Executing Upload Test Files...");
//require('./Common_Utilities/Utils').Upload_Test_File();

// ******* Execute Examples *******
console.log("*** Executing examples...");
// ******* Execute Examples *******

//// ***********************************************************
///// ***** WORKING WITH STORAGE *****
//// ***********************************************************

//// Is Storage Exist
//require('./Working_With_Storage/Comparison_Node_Storage_Exist').Run();

//// Get Get Disc Usage
//require('./Working_With_Storage/Comparison_Node_Get_Disc_Usage').Run();

//// Get File Versions
//require('./Working_With_Storage/Comparison_Node_Get_File_Versions').Run();

//// Is Object Exists
//require('./Working_With_Storage/Comparison_Node_Object_Exists').Run();


//// ***********************************************************
//// ***** WORKING WITH FOLDER *****
//// ***********************************************************

//// Create Folder
//require('./Working_With_Folder/Comparison_Node_Create_Folder').Run();

//// Copy Folder
//require('./Working_With_Folder/Comparison_Node_Copy_Folder').Run();

//// Move Folder
//require('./Working_With_Folder/Comparison_Node_Move_Folder').Run();

//// Delete Folder
//require('./Working_With_Folder/Comparison_Node_Delete_Folder').Run();

//// Get Files List
//require('./Working_With_Folder/Comparison_Node_Get_Files_List').Run();


//// ***********************************************************
//// ***** WORKING WITH FILES *****
//// ***********************************************************

//// Upload File
//require('./Working_With_Files/Comparison_Node_Upload_File').Run();

//// Copy File
//require('./Working_With_Files/Comparison_Node_Copy_File').Run();

//// Move File
//require('./Working_With_Files/Comparison_Node_Move_File').Run();

//// Delete File
//require('./Working_With_Files/Comparison_Node_Delete_File').Run();

//// Download_File
//require('./Working_With_Files/Comparison_Node_Download_File').Run();


// ***********************************************************
// ***** WORKING WITH SUPPORTED FORMATS *****
// ***********************************************************

// Get All Supported Formats
require('./Supported_File_Formats/Comparison_Node_Get_Supported_Formats').Run();


//// ***********************************************************
//// ***** WORKING WITH DOCUMENT COMPARISON *****
//// ***********************************************************

//// Compare single document with source document and get download link for output document
//require('./Working_With_Comparisons/Comparison_Node_Compare_Single_Document').Run();

//// Compare multiple document with source document and get download link for output document
//require('./Working_With_Comparisons/Comparison_Node_Compare_Multiple_Documents').Run();



//// ***********************************************************
//// ***** WORKING WITH CHANGES *****
//// ***********************************************************

//// Get changes from single source and terget files
//require('./Working_With_Changes/Comparison_Node_Get_Changes_Single_Document').Run();

//// Get changes from single source and multiple terget files
//require('./Working_With_Changes/Comparison_Node_Get_Changes_Multiple_Documents').Run();

//// Accept or reject changes with source & target document and get download link for output document
//require('./Working_With_Changes/Comparison_Node_Update_Changes_Single_Document').Run();

//// Accept or reject changes with source & multiple target documents and get download link for output document
//require('./Working_With_Changes/Comparison_Node_Update_Changes_Multiple_Document').Run();
