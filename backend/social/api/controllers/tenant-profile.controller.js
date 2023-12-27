const { storeTenant, updateTenant, getAllTenants, getSingleTenant, deleteTenant } = require("../../services/tenant-profile.services");

const addTenant = async (req, res, next) => {

  try {

    const response = await storeTenant(req.body);

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Record created successfully!",
        tenantProfile: response.data,
      })

    }

  } catch (error) {

    console.log(error, `*****************`)

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }

}

const findAndUpdateTenant = async (req, res, next) => {

  try {

    const { id } = req.params;

    const response = await updateTenant(req.body, { tenant_id: id });

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

const findTenants = async (req, res, next) => {

  try {

    const response = await getAllTenants();

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Records Fetched successfully!",
        tenantProfiles: response.data,
      })

    }

  } catch (error) {

    console.log(error, `*************`)

    return res.status(500).json({
      message: "Internal Server Error",
    })

  }
}

const findOneTenant = async (req, res, next) => {

  try {

    const { id } = req.params;

    const response = await getSingleTenant({ tenant_id: id })

    if (response.statusCode === 200) {

      return res.status(response.statusCode).json({
        message: "Record Fetched successfully!",
        tenantProfile: response.data,
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

const removeTenant = async (req, res, next) => {
  try {

    const { id } = req.params;

    const response = await deleteTenant({ tenant_id: id })

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
  addTenant,
  findAndUpdateTenant,
  findTenants,
  findOneTenant,
  removeTenant
}