const fs = require('fs');
const path = require('path');
const rootDir = require('../utilities/pathUtil');
const filepath = path.join(rootDir, 'data', 'favourites.json');
module.exports = class fav {
  static getFavourites(callback)
  {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      callback(!err ? JSON.parse(data):[]);
    });
  }
  static deleteId(homeId,callback)
  {
   fav.getFavourites(data => {
      const newdata = data.filter(element => element !== homeId);
       fs.writeFile(filepath, JSON.stringify(newdata), (err) => {
         callback(err ? "Data deletion unsuccesful":"Data deleted Successfully");
       });
    });
  }
  static addFavourites(homeId,callback)
  {
    fav.getFavourites((favhome) => {
      if (favhome.includes(homeId))
      {
        console.log("already included");
      }
      else {
        favhome.push(homeId);
      }
       fs.writeFile(filepath, JSON.stringify(favhome), callback);
    });
  }
};