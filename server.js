const express = require("express");
const app = express();
require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 5000;
app.use(express.json());
// get driver connection
const dbo = require("./server/db/conn");

const path = require("path");

//Include routes
const commentRoutes = require("./server/routes/commentRoutes");
app.use("/comments", commentRoutes);

const threadRoute = require("./server/routes/threadRoutes");
app.use("/threads", threadRoute);

const userRoute = require("./server/routes/userRoutes");
app.use("/users", userRoute);

app.use(express.static("build"));
app.get("*", (req, res) => {
  req.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
<<<<<<< HEAD
  });
  console.log(`Server is running on port: ${port}`);
});
=======

    console.log(`Server is running on porten: ${port}`);
  });
});
>>>>>>> 17989c53467efca47e4ff1f5b30214c539f180cd
