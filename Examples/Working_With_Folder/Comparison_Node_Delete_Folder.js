"use strict";
class Comparison_Node_Delete_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.DeleteFolderRequest("Comparisondocs/Comparisondocs1", myStorage, true);
		folderApi.deleteFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Comparisondocs/Comparisondocs1' folder deleted recursively.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Delete_Folder;
