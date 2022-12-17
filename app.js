const express = require ("express");
const bodyParser = require ("body-parser");
const app = express ();
const mongoose = require("mongoose");
const path = require('path');
const multer  = require('multer');
var cors = require('cors');



const dashboardRouter = require("./routes/dashboard.route");
const config = require("./config/config");
require("./config/db");

const PORT = config.app.port;
const db = mongoose.connection;
const dbcon = require("./config/db"); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')))



app.use("/",dashboardRouter);




//all the routes

app.get("/", (req, res) => {
  res.render("home");
});


app.get("/admin", (req, res) => {
  res.render("admin/iqVerbalAdd");
});


// route not found error
// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "route not found",
//   });
// });

//handling server error
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: "something broke",
//   });
// });


app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
