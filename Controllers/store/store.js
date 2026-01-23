const Home = require("../../Models/home");
const fav = require("../../Models/Favourite");

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

exports.homeDetail = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (detail) => {
    console.log(detail);
    if (detail.length==0) {
      res.redirect("/store/homes");
    }
    else {
        res.render("./store/home-detail", {
          home_detail: detail,
          pageTitle: "Home detail",
          currentPage: "Home",
        });
    }
    });
};

exports.postAddToFavourites = (req, res, next) => {
  fav.addFavourites(req.body.id, (err) => {
    if (err)
    {
      console.log("Error while marking Favourite");
    }
    res.redirect("/store/favourite");
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
  Home.fetchAll((homedata) => {
    fav.getFavourites(data => {
   const newdata=homedata.filter(element => 
         data.includes(element.id)
      );
    res.render("./store/favourite", {
      registeredHome: newdata,
      pageTitle: "favourite list",
      currentPage: "favourite",
    });
    });
  });
};