"use strict";

// This example demonstrates how to obtain all supported document formats
class GetSupportedFormats {
	static async Run() {
		let response = await infoApi.getSupportedFileFormats();
		console.log("Formats count: " + response.formats.length);
	}
}
module.exports = GetSupportedFormats;