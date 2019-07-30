"use strict";
class Comparison_Node_Move_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.MoveFolderRequest("Comparisondocs1", "Comparisondocs/Comparisondocs1", myStorage, myStorage);
		folderApi.moveFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Comparisondocs1' folder moved to 'Comparisondocs/Comparisondocs1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Move_Folder;
