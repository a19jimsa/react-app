const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://Jimmy:d5F3lcmHQwgszdVW@cluster0.mszkh.mongodb.net/?retryWrites=true&w=majority";// || "mongodb://127.0.0.1:27017/";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("a19jimsaProject");
        console.log("Successfully connected to MongoDB!!!"); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};