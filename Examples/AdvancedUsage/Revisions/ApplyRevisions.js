"use strict";

// This example demonstrates how to accept/reject revisions of DOCX document
class ApplyRevisions {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source_with_revs.docx";
	
			let options = new comparison_cloud.ApplyRevisionsOptions();
			options.sourceFile = source;
			options.outputPath = "output/result.docx";
			
			let request = new comparison_cloud.GetRevisionsRequest(source);		
			let revisions = await reviewApi.getRevisions(request);
	
			revisions.forEach(revision => {
				revision.action = comparison_cloud.RevisionInfo.ActionEnum.Accept;
			});	
			options.revisions = revisions;
	
			let response = await reviewApi.applyRevisions(new comparison_cloud.ApplyRevisionsRequest(options));
			console.log("Output file link: " + response.href);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = ApplyRevisions;
