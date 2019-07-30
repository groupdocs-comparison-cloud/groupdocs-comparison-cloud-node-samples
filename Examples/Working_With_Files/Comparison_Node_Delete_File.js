"use strict";
class Comparison_Node_Delete_File {
	static Run() {
		var request = new groupdocs_comparison_cloud_1.DeleteFileRequest("Comparisondocs1/one-page1.docx", myStorage);
		fileApi.deleteFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Comparisondocs1/one-page1.docx' deleted.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Delete_File;
