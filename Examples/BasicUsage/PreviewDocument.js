"use strict";

// This example demonstrates how to preview document
class PreviewDocument {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source.docx";
			let options = new comparison_cloud.PreviewOptions();
			options.fileInfo = source;
			options.format = "png";
			options.outputFolder = "output";
	
			let request = new comparison_cloud.PreviewRequest(options);		
	
			let response = await previewApi.preview(request);
			console.log("Output file count: " + response.length);	
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = PreviewDocument;
