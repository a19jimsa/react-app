const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router =  express.Router();

// This will help us connect to the database
const db = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//GET all threads
router.get("/", (req, res)=>{
    const dbConnect = db.getDb();
    dbConnect.collection('threads')
    .find().sort({posted: -1})
    .toArray(function (err, result) {
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
  });
})

router.get("/:query", (req, res)=>{
    const dbConnect = db.getDb();
    var regex = new RegExp(req.params.query, "i");
    dbConnect.collection('threads')
    .find({topic: regex})
    .toArray(function (err, result){
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
    });
})

//GET specific threads
router.get("/:keyword", (req, res)=>{
    const dbConnect = db.getDb();
    dbConnect.collection('threads')
    .find({['category']: req.params.keyword})
    .toArray(function (err, result) {
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
  });
})

// POST Add new thread
router.post("/", express.json(), function(req, res){
    const dbConnect = db.getDb();
    var myobj = { ['id']: req.body.id, ['topic']: req.body.topic, ['category']:req.body.category, ['content']:req.body.content,['posted']:req.body.posted, ['user']:req.body.user};
    dbConnect.collection("threads").insertOne(myobj, function(err, result) {
        if (err) throw err;
        console.log("Created new thread");
        res.status(201).send(result);
    });
})

module.exports = router;