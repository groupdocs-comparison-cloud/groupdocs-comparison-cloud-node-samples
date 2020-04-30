"use strict";

// This example demonstrates how to get document information
class GetDocumentInformation {
	static async Run() {
		let fileInfo = new comparison_cloud.FileInfo();
		fileInfo.filePath = "source_files/word/source.docx";

		let request = new comparison_cloud.GetDocumentInfoRequest(fileInfo);		

		let response = await infoApi.getDocumentInfo(request);
		console.log("GetDocumentInformation completed: " + response.pageCount);
	}
}
module.exports = GetDocumentInformation;
