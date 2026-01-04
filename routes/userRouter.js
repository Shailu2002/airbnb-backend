
//external modules
const express = require("express");
const userRouter = express.Router();
const homeController = require('../Controllers/store/store');
userRouter.get("/", homeController.HomeAdded);
userRouter.get("/favourite", homeController.favourite);
userRouter.get("/Bookings", homeController.Bookings);
userRouter.get("/index",homeController.index);
module.exports = userRouter;