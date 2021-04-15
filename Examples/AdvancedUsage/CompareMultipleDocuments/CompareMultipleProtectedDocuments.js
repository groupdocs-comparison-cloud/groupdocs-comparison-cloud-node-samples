"use strict";

// This example demonstrates how to compare multiple password-protected documents
class CompareMultipleProtectedDocuments {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source_protected.docx";
			source.password = "1231";
			let target = new comparison_cloud.FileInfo();
			target.filePath = "target_files/word/target_protected.docx";
			target.password = "5784";
			let target1 = new comparison_cloud.FileInfo();
			target1.filePath = "target_files/word/target_1_protected.docx";
			target1.password = "5784";
			let target2 = new comparison_cloud.FileInfo();
			target2.filePath = "target_files/word/target_2_protected.docx";
			target2.password = "5784";
			let options = new comparison_cloud.ComparisonOptions();
			options.sourceFile = source;
			options.targetFiles = [target, target1, target2];
			options.outputPath = "output/result.docx";
	
			let request = new comparison_cloud.ComparisonsRequest(options);		
	
			let response = await compareApi.comparisons(request);
			console.log("Output file link: " + response.href);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = CompareMultipleProtectedDocuments;
