"use strict";

// This example demonstrates how to accept/reject changes after documents compare
class AcceptOrRejectChanges {
	static async Run() {
		try {
			let source = new comparison_cloud.FileInfo();
			source.filePath = "source_files/word/source.docx";
			let target = new comparison_cloud.FileInfo();
			target.filePath = "target_files/word/target.docx";		
			
			let options = new comparison_cloud.UpdatesOptions();
			options.sourceFile = source;
			options.targetFiles = [target];
			options.outputPath = "output/result.docx";
			
			let changes = await compareApi.postChanges(new comparison_cloud.PostChangesRequest(options));
	
			changes.forEach(change => {
				change.comparisonAction = comparison_cloud.ChangeInfo.ComparisonActionEnum.Reject;
			});	
			changes[0].comparisonAction = comparison_cloud.ChangeInfo.ComparisonActionEnum.Accept;
			options.changes = changes;
	
			let response = await compareApi.putChangesDocument(new comparison_cloud.PutChangesDocumentRequest(options));
			console.log("Output file link: " + response.href);
		} catch (error) {
			console.log(error.message);
		}		
	}
}
module.exports = AcceptOrRejectChanges;
