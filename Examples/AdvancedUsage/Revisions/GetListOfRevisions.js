"use strict";

// This example demonstrates how to get list of revisions of DOCX document
class GetListOfRevisions {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source_with_revs.docx";
	
			let request = new comparison_cloud.GetRevisionsRequest(source);		
			let revisions = await reviewApi.getRevisions(request);
	
			console.log("Revisions count: " + revisions.length);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = GetListOfRevisions;
