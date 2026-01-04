const Home = require("../../Models/home");
exports.HomeAdded = (req, res, next) => {
  Home.fetchAll((data) => {
    res.render("./store/home", {
      registeredHome: data,
      pageTitle: "Home Page Airbnb",
      currentPage: "Home",
    });
  });
};
exports.index = (req, res, next) => {
  Home.fetchAll((data) => {
    res.render("./store/index", {
      registeredHome: data,
      pageTitle: "index",
      currentPage: "index",
    });
  });
};

exports.Bookings = (req, res, next) => {
  Home.fetchAll((data) => {
    res.render("./store/Bookings", {
      registeredHome: data,
      pageTitle: "Booking list",
      currentPage: "Bookings",
    });
  });
};

exports.favourite = (req, res, next) => {
  Home.fetchAll((data) => {
    res.render("./store/favourite", {
      registeredHome: data,
      pageTitle: "favourite list",
      currentPage: "favourite",
    });
  });
};