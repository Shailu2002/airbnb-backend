//fake database
const fs = require('fs');
const path = require('path');
const rootDir = require('../utilities/pathUtil');
const filepath = path.join(rootDir, "data", "homes.json");
const fav = require("../Models/Favourite");
module.exports = class Home {
  constructor(houseName, price, location, ratings, photo) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.ratings = ratings;
    this.photo = photo;
  }
  static fetchAll(callback) {
    fs.readFile(filepath, (err, data) => {
      callback(err ? [] : JSON.parse(data));
    });
  }
  save() {
    Home.fetchAll((registeredHome) => {
      if (this.id)//edit home case
      {
         registeredHome = registeredHome.map((home) => {
           if (home.id === this.id) {
             return this;
           } else {
             return home;
           }
         });
      }
      else
      {
         this.id = crypto.randomUUID();
         registeredHome.push(this);
      }
     
      fs.writeFile(filepath, JSON.stringify(registeredHome), (err) => {
        console.log(err);
      });
    });
  }
 
  static deleteId(homeId,callback)
  {
    Home.fetchAll(data => {
      const newdata = data.filter(element => element.id !== homeId);
      fs.writeFile(filepath, JSON.stringify(newdata), (err) => {
        fav.deleteId(homeId, callback);
       });
    });
  }
  static findById(homeId, callback) {
    Home.fetchAll(data => {
     // const detail = data.find(num => num.id == homeId);//object return karta hai find
      const filterse = data.filter(num=>num.id==homeId);
      callback(filterse);
    })
  }
};