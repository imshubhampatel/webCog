const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/developmentbase");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error "));

db.once("open", function(err) {
    if(err){console.log('err in connected successfuly',err)}
    console.log('We are connected to database successfully');
});