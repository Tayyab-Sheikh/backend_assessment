const UserProfile = require("../api/models/user-profile");

const storeUser = async (request = null) => {

  try {

    const data = await UserProfile.query().insert(request)

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


const updateUser = async (request = null, record = null) => {

  try {

    const data = await UserProfile.query().patch(request).where(record)

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


const getAllUsers = async () => {

  try {

    const data = await UserProfile.query()

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


const getSingleUser = async (record = null) => {

  try {

    const data = await UserProfile.query().where(record).first()

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


const deleteUser = async (record = null) => {

  try {

    const data = await UserProfile.query().delete().where(record)

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
  storeUser,
  updateUser,
  getAllUsers,
  getSingleUser,
  deleteUser
}