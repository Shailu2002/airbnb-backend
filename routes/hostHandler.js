//external modules
const express = require("express");
const hostRouter = express.Router();
const homeController = require('../Controllers/host/homes');
hostRouter.get("/add-home", homeController.Addhome);
hostRouter.post("/add-home", homeController.homepost);
hostRouter.get("/homes",homeController.homes);
exports.hostRouter = hostRouter;