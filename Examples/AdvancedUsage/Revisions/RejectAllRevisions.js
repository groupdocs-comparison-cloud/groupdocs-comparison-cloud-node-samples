"use strict";

// This example demonstrates how to reject all revisions of DOCX document
class RejectAllRevisions {
	static async Run() {
		let source = new comparison_cloud.FileInfo();
		source.filePath = "source_files/word/source_with_revs.docx";

		let options = new comparison_cloud.ApplyRevisionsOptions();
		options.sourceFile = source;
		options.rejectAll = true;
		options.outputPath = "output/result.docx";
		
		let response = await reviewApi.applyRevisions(new comparison_cloud.ApplyRevisionsRequest(options));
		console.log("Output file link: " + response.href);
	}
}
module.exports = RejectAllRevisions;
