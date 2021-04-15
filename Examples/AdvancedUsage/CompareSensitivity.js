"use strict";

// This example demonstrates how to compare documents with comparison sensitivity option
class CompareSensitivity {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source.docx";
			let target = new comparison_cloud.FileInfo();
			target.filePath = "target_files/word/target.docx";		
			let settings = new comparison_cloud.Settings();
			settings.sensitivityOfComparison = 100;
			let options = new comparison_cloud.ComparisonOptions();
			options.sourceFile = source;
			options.targetFiles = [target];
			options.outputPath = "output/result.docx";
			options.settings = settings;
	
			let request = new comparison_cloud.ComparisonsRequest(options);		
	
			let response = await compareApi.comparisons(request);
			console.log("Output file link: " + response.href);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = CompareSensitivity;
