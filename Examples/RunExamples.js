"use strict";

global.comparison_cloud = require("groupdocs-comparison-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-comparison-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Comparison Cloud API Examples
//// ***********************************************************

//TODO: Get your clientId and clientSecret at https://dashboard.groupdocs.cloud (free registration is required).

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";

global.myStorage = "First Storage";

const config = new comparison_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct CompareApi
global.compareApi = comparison_cloud.CompareApi.fromConfig(config);

// construct ReviewApi
global.reviewApi = comparison_cloud.ReviewApi.fromConfig(config);

// construct InfoApi
global.infoApi = comparison_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = comparison_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = comparison_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Basic usage Examples
    await require('./BasicUsage/GetSupportedFormats').Run();    
    await require('./BasicUsage/GetDocumentInformation').Run();
    await require('./BasicUsage/CompareDocuments').Run();
    await require('./BasicUsage/CompareDifferentFormats/ComparePdfDocuments').Run();

    // Advanced usage Examples
    await require('./AdvancedUsage/CompareMultipleDocuments/CompareMultipleDocumentsOptions').Run();
    await require('./AdvancedUsage/CompareMultipleDocuments/CompareMultipleProtectedDocuments').Run();
    await require('./AdvancedUsage/SaveOptions/SetMetadata').Run();
    await require('./AdvancedUsage/SaveOptions/SetPassword').Run();
    await require('./AdvancedUsage/AcceptOrRejectChanges').Run();
    await require('./AdvancedUsage/CompareProtectedDocuments').Run();
    await require('./AdvancedUsage/CompareSensitivity').Run();
    await require('./AdvancedUsage/CustomizeChangesStyles').Run();
    await require('./AdvancedUsage/GetChangesCoordinates').Run();
    await require('./AdvancedUsage/GetListOfChanges').Run();
    await require('./AdvancedUsage/Revisions/GetListOfRevisions').Run();
    await require('./AdvancedUsage/Revisions/ApplyRevisions').Run();
}

examples();
