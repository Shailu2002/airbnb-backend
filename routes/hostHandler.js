//external modules
const express = require("express");
const hostRouter = express.Router();
const homeController = require('../Controllers/host/homes');
hostRouter.get("/edit-home", homeController.Addhome);
hostRouter.post("/add-home", homeController.homepost);
hostRouter.get("/homes", homeController.homes);
hostRouter.get("/edit-home/:homeid", homeController.getedithome);
hostRouter.post("/edit-home", homeController.postEdithome);
hostRouter.get("/delete-home/:homeid", homeController.deleteHome);
hostRouter.post("/favourites/delete/:homeid",homeController.deleteFav);
exports.hostRouter = hostRouter;