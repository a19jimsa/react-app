const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router =  express.Router();

// This will help us connect to the database
const db = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

db.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }
});

router.get("/", function(req, res){
  const dbConnect = db.getDb();
    dbConnect.collection('users')
    .find()
    .toArray(function (err, result) {
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
  });
})

// POST Add user
router.post("/", express.json(), function(req, res){
    const dbConnect = db.getDb();
    var myobj = { ['username']: req.body.username};
    dbConnect.collection("users").insertOne(myobj, function(err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        res.status(201).send(result);
    });
})

module.exports = router;