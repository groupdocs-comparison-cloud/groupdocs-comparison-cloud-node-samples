"use strict";
class Comparison_Node_Copy_File {
	static Run() {
		var request = new groupdocs_comparison_cloud_1.CopyFileRequest("Comparisondocs/one-page1.docx", "Comparisondocs/one-page-copied.docx", myStorage, myStorage);
		fileApi.copyFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Comparisondocs/one-page1.docx' file copied as 'Comparisondocs/one-page-copied.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Copy_File;
