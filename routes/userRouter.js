
//external modules
const express = require("express");
const userRouter = express.Router();
const homeController = require('../Controllers/store/store');
userRouter.get("/", homeController.index);
userRouter.get("/favourite", homeController.favourite);
userRouter.get("/Bookings", homeController.Bookings);
userRouter.get("/homes", homeController.HomeAdded);
userRouter.get("/homes/:homeId",homeController.homeDetail);
module.exports = userRouter;