"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new comparison_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			var file = fs.readFileSync(resourcesFolder + filePath);
			var uploadRequest = new comparison_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("source_files/cell/source.xlsx");
		await this.UploadTestFile("source_files/cell/source_protected.xlsx");
		await this.UploadTestFile("source_files/diagram/source.vsdx");
		await this.UploadTestFile("source_files/email/source.eml");
		await this.UploadTestFile("source_files/html/source.html");
		await this.UploadTestFile("source_files/image/source.png");
		await this.UploadTestFile("source_files/note/source.one");
		await this.UploadTestFile("source_files/note/source_protected.one");
		await this.UploadTestFile("source_files/pdf/source.pdf");
		await this.UploadTestFile("source_files/pdf/source_protected.pdf");
		await this.UploadTestFile("source_files/slide/source.pptx");
		await this.UploadTestFile("source_files/slide/source_protected.pptx");
		await this.UploadTestFile("source_files/text/source.txt");
		await this.UploadTestFile("source_files/word/source.docx");
		await this.UploadTestFile("source_files/word/source_protected.docx");
		await this.UploadTestFile("target_files/cell/target.xlsx");
		await this.UploadTestFile("target_files/cell/target_protected.xlsx");
		await this.UploadTestFile("target_files/diagram/target.vsdx");
		await this.UploadTestFile("target_files/email/target.eml");
		await this.UploadTestFile("target_files/html/target.html");
		await this.UploadTestFile("target_files/image/target.png");
		await this.UploadTestFile("target_files/note/target.one");
		await this.UploadTestFile("target_files/note/target_protected.one");
		await this.UploadTestFile("target_files/pdf/target.pdf");
		await this.UploadTestFile("target_files/pdf/target_protected.pdf");
		await this.UploadTestFile("target_files/slide/target.pptx");
		await this.UploadTestFile("target_files/slide/target_1.pptx");
		await this.UploadTestFile("target_files/slide/target_1_protected.pptx");
		await this.UploadTestFile("target_files/slide/target_2.pptx");
		await this.UploadTestFile("target_files/slide/target_2_protected.pptx");
		await this.UploadTestFile("target_files/slide/target_protected.pptx");
		await this.UploadTestFile("target_files/text/target.txt");
		await this.UploadTestFile("target_files/word/target.docx");
		await this.UploadTestFile("target_files/word/target_1.docx");
		await this.UploadTestFile("target_files/word/target_1_protected.docx");
		await this.UploadTestFile("target_files/word/target_2.docx");
		await this.UploadTestFile("target_files/word/target_2_protected.docx");
		await this.UploadTestFile("target_files/word/target_protected.docx");
	}	
}

module.exports = Utils;
