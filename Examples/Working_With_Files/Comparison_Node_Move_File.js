"use strict";
class Comparison_Node_Move_File {
	static Run() {
		var request = new groupdocs_comparison_cloud_1.MoveFileRequest("Comparisondocs/one-page1.docx", "Comparisondocs1/one-page1.docx", myStorage, myStorage);
		fileApi.moveFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Comparisondocs/one-page1.docx' file moved to 'Comparisondocs1/one-page1.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Move_File;
