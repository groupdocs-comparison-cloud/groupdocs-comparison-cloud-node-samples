"use strict";
class Comparison_Node_Update_Changes_Single_Document {
	static Run() {

		var options = new groupdocs_comparison_cloud_1.UpdatesOptions();

		// Source file
		var sourceFileInfo = new groupdocs_comparison_cloud_1.FileInfo();
		sourceFileInfo.filePath = "Comparisondocs\\source_protected.docx";
		sourceFileInfo.password = "1231";
		sourceFileInfo.storageName = myStorage;

		options.sourceFile = sourceFileInfo;

		options.outputPath = "Comparisondocs\\result_single_protected.docx";

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

		let cInfo1 = new groupdocs_comparison_cloud_1.ChangeInfo();
		cInfo1.id = 0;
		cInfo1.comparisonAction = "Accept";
		let cInfo2 = new groupdocs_comparison_cloud_1.ChangeInfo();
		cInfo2.id = 1;
		cInfo2.comparisonAction = "Reject";

		options.changes = [cInfo1, cInfo2];

		// Target file
		var targetFileInfo = new groupdocs_comparison_cloud_1.FileInfo();
		targetFileInfo.filePath = "Comparisondocs\\target_protected.docx";
		targetFileInfo.password = "5784";
		targetFileInfo.storageName = myStorage;

		options.targetFiles = [targetFileInfo];

		var request = new groupdocs_comparison_cloud_1.PutChangesDocumentRequest(options);

		compareApi.putChangesDocument(request)
			.then(function (response) {
				console.log("Expected response type is Link: " + response.href);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Comparison_Node_Update_Changes_Single_Document;