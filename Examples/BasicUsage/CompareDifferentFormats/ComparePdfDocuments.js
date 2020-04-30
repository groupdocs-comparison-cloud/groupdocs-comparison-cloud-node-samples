"use strict";

// This example demonstrates how to compare two pdf documents
class ComparePdfDocuments {
	static async Run() {
		let source = new comparison_cloud.FileInfo();
		source.filePath = "source_files/pdf/source.pdf";
		let target = new comparison_cloud.FileInfo();
		target.filePath = "target_files/pdf/target.pdf";
		let options = new comparison_cloud.ComparisonOptions();
		options.sourceFile = source;
		options.targetFiles = [target];
		options.outputPath = "output/result.pdf";

		let request = new comparison_cloud.ComparisonsRequest(options);		

		let response = await compareApi.comparisons(request);
		console.log("Output file link: " + response.href);
	}
}
module.exports = ComparePdfDocuments;
