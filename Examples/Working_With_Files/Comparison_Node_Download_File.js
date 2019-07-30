"use strict";
class Comparison_Node_Download_File {
	static Run() {
		var request = new groupdocs_comparison_cloud_1.DownloadFileRequest("Comparisondocs/one-page.docx", myStorage);
		fileApi.downloadFile(request)
			.then(function (response) {
				console.log("Expected response type is Stream: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Download_File;
