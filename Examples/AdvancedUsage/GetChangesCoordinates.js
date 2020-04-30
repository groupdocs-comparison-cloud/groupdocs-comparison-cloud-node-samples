"use strict";

// This example demonstrates how to get changes coordinates
class GetChangesCoordinates {
	static async Run() {
		let source = new comparison_cloud.FileInfo();
		source.filePath = "source_files/word/source.docx";
		let target = new comparison_cloud.FileInfo();
		target.filePath = "target_files/word/target.docx";		
		let settings = new comparison_cloud.Settings();
		settings.calculateComponentCoordinates = true;
		let options = new comparison_cloud.ComparisonOptions();
		options.sourceFile = source;
		options.targetFiles = [target];
		options.outputPath = "output/result.docx";
		options.settings = settings;

		let request = new comparison_cloud.PostChangesRequest(options);		
		let changes = await compareApi.postChanges(request);

		for (let i = 0; i < 2; i++) {
			const change = changes[i];
			console.log("Change Type: " + change.type + ", X: " + change.box.x + ", Y: " + change.box.y + ", Text: " + change.text);
		}
		console.log("...");
	}
}
module.exports = GetChangesCoordinates;
