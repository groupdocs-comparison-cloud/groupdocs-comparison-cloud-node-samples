"use strict";

// This example demonstrates how to accept all revisions of DOCX document
class AcceptAllRevisions {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source_with_revs.docx";
	
			let options = new comparison_cloud.ApplyRevisionsOptions();
			options.sourceFile = source;
			options.acceptAll = true;
			options.outputPath = "output/result.docx";
			
			let response = await reviewApi.applyRevisions(new comparison_cloud.ApplyRevisionsRequest(options));
			console.log("Output file link: " + response.href);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = AcceptAllRevisions;
