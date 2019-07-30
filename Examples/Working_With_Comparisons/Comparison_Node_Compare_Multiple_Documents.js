"use strict";
class Comparison_Node_Compare_Multiple_Documents {
	static Run() {

		var options = new groupdocs_comparison_cloud_1.Options();

		// Source file
		var sourceFileInfo = new groupdocs_comparison_cloud_1.FileInfo();
		sourceFileInfo.filePath = "Comparisondocs\\source_protected.docx";
		sourceFileInfo.password = "1231";
		sourceFileInfo.storageName = myStorage;

		options.sourceFile = sourceFileInfo;

		options.outputPath = "Comparisondocs\\result_multi_protected.docx";

		options.settings = new groupdocs_comparison_cloud_1.Settings();
		options.settings.generateSummaryPage = true;
		options.settings.showDeletedContent = true;
		options.settings.styleChangeDetection = true;
		options.settings.useFramesForDelInsElements = false;
		options.settings.metaData = undefined;
		options.settings.detailLevel = "Low";
		options.settings.diagramMasterSetting = undefined;
		options.settings.calculateComponentCoordinates = false;
		options.settings.cloneMetadata = "Default";
		options.settings.markDeletedInsertedContentDeep = false;
		options.settings.password = "1111";
		options.settings.passwordSaveOption = "User";

		options.settings.deletedItemsStyle = new groupdocs_comparison_cloud_1.ItemsStyle();
		options.settings.deletedItemsStyle.beginSeparatorString = "";
		options.settings.deletedItemsStyle.endSeparatorString = "";
		options.settings.deletedItemsStyle.fontColor = "16711680";
		options.settings.deletedItemsStyle.highlightColor = "16711680";
		options.settings.deletedItemsStyle.bold = false;
		options.settings.deletedItemsStyle.italic = false;
		options.settings.deletedItemsStyle.strikeThrough = false;

		options.settings.insertedItemsStyle = new groupdocs_comparison_cloud_1.ItemsStyle();
		options.settings.insertedItemsStyle.beginSeparatorString = "";
		options.settings.insertedItemsStyle.endSeparatorString = "";
		options.settings.insertedItemsStyle.fontColor = "255";
		options.settings.insertedItemsStyle.highlightColor = "255";
		options.settings.insertedItemsStyle.bold = false;
		options.settings.insertedItemsStyle.italic = false;
		options.settings.insertedItemsStyle.strikeThrough = false;

		options.settings.styleChangedItemsStyle = new groupdocs_comparison_cloud_1.ItemsStyle();
		options.settings.styleChangedItemsStyle.beginSeparatorString = "";
		options.settings.styleChangedItemsStyle.endSeparatorString = "";
		options.settings.styleChangedItemsStyle.fontColor = "65280";
		options.settings.styleChangedItemsStyle.highlightColor = "65280";
		options.settings.styleChangedItemsStyle.bold = false;
		options.settings.styleChangedItemsStyle.italic = false;
		options.settings.styleChangedItemsStyle.strikeThrough = false;

		// First target file
		var targetFileInfo1 = new groupdocs_comparison_cloud_1.FileInfo();
		targetFileInfo1.filePath = "Comparisondocs\\target_protected.docx";
		targetFileInfo1.password = "5784";
		targetFileInfo1.storageName = myStorage;

		// Second target file
		var targetFileInfo2 = new groupdocs_comparison_cloud_1.FileInfo();
		targetFileInfo2.filePath = "Comparisondocs\\target_2_protected.docx";
		targetFileInfo2.password = "5784";
		targetFileInfo2.storageName = myStorage;

		options.targetFiles = [targetFileInfo1, targetFileInfo2];

		var request = new groupdocs_comparison_cloud_1.ComparisonsRequest(options);

		compareApi.comparisons(request)
			.then(function (response) {
				console.log("Expected response type is Link: " + response.href);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Compare_Multiple_Documents;
