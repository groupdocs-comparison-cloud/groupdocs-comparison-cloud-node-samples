"use strict";
class Comparison_Node_Get_Files_List {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.GetFilesListRequest("Comparisondocs/sample.docx", myStorage);
		folderApi.getFilesList(request)
			.then(function (response) {
				console.log("Expected response type is FilesList: " + response.value.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Get_Files_List;
