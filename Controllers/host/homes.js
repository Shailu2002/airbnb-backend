const Home = require('../../Models/home');
//core module
const crypto = require('crypto');
exports.Addhome = (req, res, next) => {
  res.render("./host/addHome", {
    pageTitle: "Add Home Page",
    currentPage: "AddHome",
  });
};
exports.homepost = (req, res, next) => {
  const id = crypto.randomUUID();
  const obj = new Home(id,req.body.houseName, req.body.price, req.body.location, req.body.ratings, req.body.photo);
  obj.save();
  res.render("./host/homeAdded", {
    pageTitle: "Home added page",
    currentPage: "HomeAdded",
  });
};

exports.homes= (req, res, next) => {
  Home.fetchAll((data) => {
    res.render("./host/host-home-list", {
      registeredHome: data,
      pageTitle: "Home list Host",
      currentPage: "Homehost",
    });
  });
};