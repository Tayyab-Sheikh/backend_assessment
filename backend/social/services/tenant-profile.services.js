const TenantProfile = require("../api/models/tenant-profile");

const storeTenant = async (body) => {

  try {

    const data = await TenantProfile.query().insert(body)

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


const updateTenant = async (body, tenantId) => {

  try {

    const data = await TenantProfile.query().patch(body).where(tenantId)

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


const getSingleTenant = async (tenantId) => {

  try {

    const data = await TenantProfile.query().where(tenantId).first()

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


const deleteTenant = async (tenantId) => {

  try {

    const data = await TenantProfile.query().delete().where(tenantId)

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