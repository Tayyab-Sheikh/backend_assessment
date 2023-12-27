const express = require("express");
const tenantRouter = express.Router();

const { addTenant, findAndUpdateTenant, findTenants, findOneTenant, removeTenant } = require("../controllers/tenant-profile.controller");


tenantRouter.post(`/`, addTenant);
tenantRouter.get(`/`, findTenants);
tenantRouter.get(`/:id`, findOneTenant);
tenantRouter.patch(`/:id`, findAndUpdateTenant);
tenantRouter.delete(`/:id`, removeTenant);


module.exports = {
  tenantRouter
}