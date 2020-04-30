"use strict";

// This example demonstrates how to compare multiple documents with options
class CompareMultipleDocumentsOptions {
	static async Run() {
		let source = new comparison_cloud.FileInfo();
		source.filePath = "source_files/word/source.docx";
		let target = new comparison_cloud.FileInfo();
		target.filePath = "target_files/word/target.docx";
		let target1 = new comparison_cloud.FileInfo();
		target1.filePath = "target_files/word/target_1.docx";
		let target2 = new comparison_cloud.FileInfo();
		target2.filePath = "target_files/word/target_2.docx";
		let settings = new comparison_cloud.Settings();
		settings.insertedItemsStyle = new comparison_cloud.ItemsStyle();
		settings.insertedItemsStyle.fontColor = "16711680";
		let options = new comparison_cloud.ComparisonOptions();
		options.sourceFile = source;
		options.targetFiles = [target, target1, target2];
		options.outputPath = "output/result.docx";
		options.settings = settings;

		let request = new comparison_cloud.ComparisonsRequest(options);		

		let response = await compareApi.comparisons(request);
		console.log("Output file link: " + response.href);
	}
}
module.exports = CompareMultipleDocumentsOptions;
