const { storeTenant } = require("../services/tenant-profile.services");
const { storeUser } = require("../services/user-profile.services");

const processMessage = async (kafkaMessage) => {

	try {
		//Start working here
		const { event_name } = kafkaMessage;

		if (event_name == "tenant_created") {

			let tenantData = { ...kafkaMessage.properties, tenant_id: kafkaMessage.properties.id };

			delete tenantData.id

			const response = await storeTenant(tenantData);

			if (response.statusCode == 200) {
				console.log(`Tenant Created!`)
			}

		} else if (event_name == "user_created") {

			let userData = { ...kafkaMessage.properties, user_id: kafkaMessage.properties.id }
			delete userData.id

			const response = await storeUser(userData);

			if (response.statusCode == 200) {
				console.log(`User Created!`)
			}

		}

	} catch (error) {

		console.log("Error processing Kafka message:", error);

	}

};

module.exports = { processMessage };

