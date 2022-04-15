"use strict";
class GetLicenseConsumption {
	static async Run() {

		let response = await licenseApi.getConsumptionCredit();
		console.log("GetLicenseConsumption: Credit = " + response.credit);
	}
}
module.exports = GetLicenseConsumption;
