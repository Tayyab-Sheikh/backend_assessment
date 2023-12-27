const UserProfile = require("../api/models/user-profile");

const storeUser = async (body) => {

  try {

    const data = await UserProfile.query().insert(body)

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


const updateUser = async (body, userId) => {

  try {

    const data = await UserProfile.query().patch(body).where(userId)

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


const getSingleUser = async (userId) => {

  try {

    const data = await UserProfile.query().where(userId).first()

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


const deleteUser = async (userId) => {

  try {

    const data = await UserProfile.query().delete().where(userId)

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