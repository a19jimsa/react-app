const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");
const path = require('path');

app.use(express.static('../src/components'));
app.use(express.static('../public'));
app.use(express.static('../server'));

app.use('/', express.static(path.join(__dirname, 'src')));

//Include routes
const commentRoutes = require("./routes/commentRoutes")
app.use("/comments", commentRoutes);

const threadRoute = require("./routes/threadRoutes")
app.use("/threads", threadRoute);

const userRoute = require("./routes/userRoutes")
app.use("/users", userRoute);
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});