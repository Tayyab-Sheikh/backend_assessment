const TenantProfile = require("../api/models/tenant-profile");

const storeTenant = async (request = null) => {

  try {

    const data = await TenantProfile.query().insert(request)

    return {
      statusCode: 200,
      data,
    }

  } catch (error) {

    return {
      statusCode: 500,
      error,
    }

  }
}


const updateTenant = async (request = null, record = null) => {

  try {

    const data = await TenantProfile.query().patch(request).where(record)

    if (data == 1) {

      return {
        statusCode: 200,
        data,
      }

    } else {

      return {
        statusCode: 404,
      }

    }

  } catch (error) {

    return {
      statusCode: 500,
      error,
    }

  }
}


const getAllTenants = async () => {

  try {

    const data = await TenantProfile.query()

    return {
      statusCode: 200,
      data,
    }

  } catch (error) {

    return {
      statusCode: 500,
      error,
    }

  }
}


const getSingleTenant = async (record = null) => {

  try {

    const data = await TenantProfile.query().where(record).first()

    if (data) {

      return {
        statusCode: 200,
        data,
      }

    } else {

      return {
        statusCode: 404,
      }

    }

  } catch (error) {

    return {
      statusCode: 500,
      error,
    }

  }
}


const deleteTenant = async (record = null) => {

  try {

    const data = await TenantProfile.query().delete().where(record)

    if (data == 1) {

      return {
        statusCode: 200,
      }

    } else {

      return {
        statusCode: 404,
      }

    }

  } catch (error) {

    return {
      statusCode: 500,
      error,
    }

  }
}

module.exports = {
  storeTenant,
  updateTenant,
  getAllTenants,
  getSingleTenant,
  deleteTenant
}