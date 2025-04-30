// Grap Dep
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

// load env variable
require('dotenv').config();
const port= process.env.PORT || 3000;
const path=require('path')

const employeeRoutes = require("./routes/web.js");
//set view engine

app.set('view engine','ejs')
app.use(require('express-ejs-layouts'));
app.set('layout', 'layout');


//db connect
mongoose.connect("mongodb://localhost:27017/employeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbVariable=mongoose.connection
if(dbVariable){console.log("connection done")}
// set static middileware

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routes define
app.use('/employees',employeeRoutes)
app.get("/", (req, res) => {
  res.redirect("/employees");
});

app.listen(port, () => {
  console.log(`server running  on localhost:${port}`);
});