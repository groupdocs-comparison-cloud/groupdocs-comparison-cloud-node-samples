"use strict";
class Comparison_Node_Object_Exists {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.ObjectExistsRequest("Comparisondocs/one-page.docx", myStorage);
		storageApi.objectExists(request)
			.then(function (response) {
				console.log("Expected response type is ObjectExist: " + response.exists);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Object_Exists;
