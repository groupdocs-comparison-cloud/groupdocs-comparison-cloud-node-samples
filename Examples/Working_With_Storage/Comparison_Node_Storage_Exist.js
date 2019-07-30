"use strict";
class Comparison_Node_Storage_Exist {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_comparison_cloud_1.StorageExistsRequest(myStorage);
		storageApi.storageExists(request)
			.then(function (response) {
				console.log("Expected response type is StorageExist: " + response.exists);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Storage_Exist;
