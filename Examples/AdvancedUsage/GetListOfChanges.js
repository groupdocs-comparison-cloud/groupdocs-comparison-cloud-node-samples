"use strict";

// This example demonstrates how to get list of changes of compared documents
class GetListOfChanges {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source.docx";
			let target = new comparison_cloud.FileInfo();
			target.filePath = "target_files/word/target.docx";		
			let options = new comparison_cloud.ComparisonOptions();
			options.sourceFile = source;
			options.targetFiles = [target];
			options.outputPath = "output/result.docx";
	
			let request = new comparison_cloud.PostChangesRequest(options);		
			let changes = await compareApi.postChanges(request);
	
			console.log("Changes count: " + changes.length);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = GetListOfChanges;
