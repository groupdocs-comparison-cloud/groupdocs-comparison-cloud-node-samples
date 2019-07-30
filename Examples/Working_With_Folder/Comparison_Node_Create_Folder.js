"use strict";
class Comparison_Node_Create_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.CreateFolderRequest("Comparisondocs", myStorage);
		folderApi.createFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Comparisondocs' folder created.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Create_Folder;
