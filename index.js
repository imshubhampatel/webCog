const express = require('express');
const mongoose = require("mongoose");
const Contact = require("./models/contact")

const app = express();
port = 8000;

// taking data form the form 
app.use(express.urlencoded())

// setting up views here 
app.set("view engine", "ejs");
app.set("views", "./views");

// setting up permanent routes
app.use("/", require("./routes/index"));


// setting up port listening 
app.listen(port, function (err) {
    if (err) {
        console.log("Error in running port", err);
    }
    console.log("server is up on port http://localhost:8000 ");
});

// files last line is here 