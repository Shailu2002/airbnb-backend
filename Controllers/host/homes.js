const Home = require('../../Models/home');
exports.Addhome = (req, res, next) => {
  res.render("./host/addHome", {
    pageTitle: "Add Home Page",
    currentPage: "AddHome",
  });
};
exports.homepost = (req, res, next) => {
  const obj = new Home(req.body.houseName, req.body.price, req.body.location, req.body.ratings, req.body.photo);
  obj.save();
  res.render("./host/homeAdded", {
    pageTitle: "Home added page",
    currentPage: "HomeAdded",
  });
};
