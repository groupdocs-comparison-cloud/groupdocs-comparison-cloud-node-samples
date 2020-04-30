"use strict";

// This example demonstrates how to compare  documents with customizing changes styles
class CustomizeChangesStyles {
	static async Run() {
		let source = new comparison_cloud.FileInfo();
		source.filePath = "source_files/word/source.docx";
		let target = new comparison_cloud.FileInfo();
		target.filePath = "target_files/word/target.docx";
		
		let settings = new comparison_cloud.Settings();
		settings.insertedItemsStyle = new comparison_cloud.ItemsStyle();
		settings.insertedItemsStyle.highlightColor = "14297642";
		settings.insertedItemsStyle.fontColor = "16711680";
		settings.insertedItemsStyle.underline = true;
		settings.deletedItemsStyle = new comparison_cloud.ItemsStyle();		
		settings.deletedItemsStyle.fontColor = "14166746";
		settings.deletedItemsStyle.bold = true;
		settings.changedItemsStyle = new comparison_cloud.ItemsStyle();		
		settings.changedItemsStyle.fontColor = "14320170";
		settings.changedItemsStyle.italic = true;

		let options = new comparison_cloud.ComparisonOptions();
		options.sourceFile = source;
		options.targetFiles = [target];
		options.outputPath = "output/result.docx";
		options.settings = settings;

		let request = new comparison_cloud.ComparisonsRequest(options);		

		let response = await compareApi.comparisons(request);
		console.log("Output file link: " + response.href);
	}
}
module.exports = CustomizeChangesStyles;
