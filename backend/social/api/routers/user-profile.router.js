const express = require("express");
const userRouter = express.Router();

const { addUser, findAndUpdateUser, findUsers, findOneUser, removeUser } = require("../controllers/user-profile.controller");

userRouter.post(`/`, addUser);
userRouter.get(`/`, findUsers);
userRouter.get(`/:id`, findOneUser);
userRouter.patch(`/:id`, findAndUpdateUser);
userRouter.delete(`/:id`, removeUser);


module.exports = {
  userRouter
}