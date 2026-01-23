const fav = require("../../Models/Favourite");
const Home = require('../../Models/home');
//core module
exports.Addhome = (req, res, next) => {
  res.render("./host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "AddHome",
    editing:false,
  });
};

exports.deleteHome = (req,res,next) => {
  const id = req.params.homeid;
  Home.deleteId(id, callback => {
    console.log(callback);
    res.redirect("/host/homes");
  });

};

exports.deleteFav = (req,res,next) => {
  const id = req.params.homeid;
  fav.deleteId(id, callback => {
    console.log(callback);
    res.redirect("/store/favourite");
  });
}
exports.homepost = (req, res, next) => {
  const obj = new Home(req.body.houseName, req.body.price, req.body.location, req.body.ratings, req.body.photo);
  obj.save();
  res.render("./host/homeAdded", {
    pageTitle: "Home added page",
    currentPage: "HomeAdded",
    editing:false,
  });
};
exports.postEdithome = (req, res, next) => {
  const { id, houseName, price, location, ratings, photo } = req.body;
  const home = new Home(houseName, price, location, ratings, photo);
  home.id = id;
  home.save();
  res.redirect("/host/homes");
 }
exports.getedithome = (req, res, next) => {
  const homeId = req.params.homeid;// path parameters
  const editing = ((req.query.editing) === "true");//query parameter read
  Home.findById(homeId, (detail) => {
    console.log(detail);
    if (detail.length == 0)
    {
      res.redirect("/host/homes");
    }
    else
    {
      res.render("./host/edit-home", {
        home_detail: detail,
        pageTitle:"Edit your home",
        currentPage: "Host-home",
        editing:editing,
      });
    }
  });
}

exports.homes= (req, res, next) => {
  Home.fetchAll((data) => {
    res.render("./host/host-home-list", {
      registeredHome: data,
      pageTitle: "Home list Host",
      currentPage: "Homehost",
    });
  });
};