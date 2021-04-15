"use strict";

// This example demonstrates how to compare two password-protected documents
class CompareProtectedDocuments {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source_protected.docx";
			source.password = "1231";
			let target = new comparison_cloud.FileInfo();
			target.filePath = "target_files/word/target_protected.docx";
			target.password = "5784";
			
			let options = new comparison_cloud.ComparisonOptions();
			options.sourceFile = source;
			options.targetFiles = [target];
			options.outputPath = "output/result.docx";
	
			let request = new comparison_cloud.ComparisonsRequest(options);		
	
			let response = await compareApi.comparisons(request);
			console.log("Output file link: " + response.href);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = CompareProtectedDocuments;
