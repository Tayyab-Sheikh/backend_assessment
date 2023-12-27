const { storeUser, updateUser, getAllUsers, getSingleUser, deleteUser } = require("../../services/user-profile.services");

const addUser = async (req, res, next) => {

  try {

    const response = await storeUser(req.body);

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Record created successfully!",
        userProfile: response.data,
      })

    }

  } catch (error) {

    console.log(error, `*****************`)

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }

}

const findAndUpdateUser = async (req, res, next) => {

  try {

    const { id } = req.params;

    const response = await updateUser(req.body, { user_id: id });

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Record Updated successfully!",
      })

    } else if (response.statusCode === 404) {

      return res.status(response.statusCode).json({
        message: "Record Not Found!",
      })

    }

  } catch (error) {

    console.log(error, `*****************`);

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }
}

const findUsers = async (req, res, next) => {

  try {

    const response = await getAllUsers();

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Records Fetched successfully!",
        userProfiles: response.data,
      })

    }

  } catch (error) {

    console.log(error, `*************`)

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }
}

const findOneUser = async (req, res, next) => {

  try {

    const { id } = req.params;

    const response = await getSingleUser({ user_id: id })

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Record Fetched successfully!",
        userProfile: response.data,
      })

    } else if (response.statusCode === 404) {

      return res.status(response.statusCode).json({
        message: "Record Not Found!",
      })

    }

  } catch (error) {

    console.log(error, `***********`)

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }
}

const removeUser = async (req, res, next) => {
  try {

    const { id } = req.params;

    const response = await deleteUser({ user_id: id })

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Record Deleted successfully!",
      })

    } else if (response.statusCode === 404) {

      return res.status(response.statusCode).json({
        message: "Record Not Found!",
      })

    }

  } catch (error) {

    console.log(error, `************`);

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }
}


module.exports = {
  addUser,
  findAndUpdateUser,
  findUsers,
  findOneUser,
  removeUser
}