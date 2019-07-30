"use strict";
class Utils {
	static Upload_Test_File() {
		var resourcesFolder = './Resources/Comparisondocs/';

		fs.readdir(resourcesFolder, (err, files) => {
			console.log("Total files in 'Comparisondocs' folder: " + files.length);
			files.forEach(file => {
				var srcFilePath = "Comparisondocs/" + file;
				var existsRequest = new groupdocs_comparison_cloud_1.ObjectExistsRequest(srcFilePath, myStorage);
				//console.log("srcFilePath: " + srcFilePath);
				storageApi.objectExists(existsRequest)
					.then(function (existResponse) {
						//console.log("existResponse.exists: " + existResponse.exists);
						if (existResponse.exists === false) {
							var uploadRequest = new groupdocs_comparison_cloud_1.UploadFileRequest(srcFilePath, file);
							fileApi.uploadFile(uploadRequest).then(function (createResponse) {
								console.log("Uploaded: " + srcFilePath);
							}).catch(function (error) {
								console.log("File already exists: " + file);
								console.log("Error: " + error.message);
							});
						}
					})
					.catch(function (error) {
						console.log("Error: " + error.message);
					});
			});
		});
	}
}
module.exports = Utils;