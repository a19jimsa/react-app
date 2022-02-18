const express = require("express");
const app = express();
require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 5000;
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");

const path = require("path");

app.use(express.static('../src'));
app.use(express.static('../public'));
app.use(express.static('../server'));

//Include routes
const commentRoutes = require("./routes/commentRoutes")
app.use("/comments", commentRoutes);

const threadRoute = require("./routes/threadRoutes")
app.use("/threads", threadRoute);

const userRoute = require("./routes/userRoutes")
app.use("/users", userRoute);

app.use(express.static(path.resolve(__dirname, "../src/build")));
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on porten: ${port}`);
});