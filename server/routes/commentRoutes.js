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

//GET all comments
router.get("/", (req, res)=>{
    const dbConnect = db.getDb();
    dbConnect.collection('comments')
    .find({})
    .toArray(function (err, result) {
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
  });
})

//GET all comments on a specific thread
router.get("/:id", (req, res)=>{
    const dbConnect = db.getDb();
    dbConnect.collection('comments')
    .find({['id']: req.params.id})
    .toArray(function (err, result) {
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
  });
})

//GET Filter all comments on a specific thread
router.get("/:id/:filter", (req, res)=>{
    var regex = new RegExp(req.params.filter, "i");
    const dbConnect = db.getDb();
    dbConnect.collection('comments')
    .find({$and: [{['id']: req.params.id}, {content:regex}]})
    .toArray(function (err, result) {
        if (err) {
            console.log("Something went wrong with DB call", err)
        } else {
            res.status(200).send(result);
        }
  });
})

// POST Add comment on specific thread
router.post("/:threadId", express.json(), function(req, res){
    const dbConnect = db.getDb();
    var myobj = { ['id']: req.params.threadId, ['topic']: req.body.topic, ['content']:req.body.content,['posted']:req.body.posted, ['user']:req.body.user, ['likes']:0};
    dbConnect.collection("comments").insertOne(myobj, function(err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        res.status(201).send(result);
    });
})

router.post("/like/:id", express.json(), function(req, res){
    const dbConnect = db.getDb();
    console.log(req.params.id);
    const myquery = {_id : ObjectId(req.params.id)};
    console.log(myquery)
    const newValues = {$inc : {likes: 1}}
    console.log(newValues);
    dbConnect.collection("comments").updateOne(myquery, newValues, function(err, result){
        if(err) throw err;
        console.log("1 document updated");
        console.log(result);
        res.status(201).send(result);
    });
})

module.exports = router;