"use strict";
class Comparison_Node_Copy_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.CopyFolderRequest("Comparisondocs", "Comparisondocs1", myStorage, myStorage);
		folderApi.copyFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Comparisondocs' folder copied as 'Comparisondocs1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Copy_Folder;
