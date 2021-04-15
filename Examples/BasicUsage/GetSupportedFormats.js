"use strict";

// This example demonstrates how to obtain all supported document formats
class GetSupportedFormats {
	static async Run() {
		try {
			let response = await infoApi.getSupportedFileFormats();
			console.log("Formats count: " + response.formats.length);	
		} catch (error) {
			console.log(error.message);
		}
	}
}
module.exports = GetSupportedFormats;