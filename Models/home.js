//fake database
const fs = require('fs');
const path = require('path');
const rootDir = require('../utilities/pathUtil');
const filepath = path.join(rootDir, "data", "homes.json");
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
      registeredHome.push(this);
      fs.writeFile(filepath, JSON.stringify(registeredHome), (err) => {
        console.log(err);
      });
    });
  }
};