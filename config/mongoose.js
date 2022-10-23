const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.connect("mongodb://localhost/Authencate_development");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once('open', function (err) {
    if (err) {
        console.log("Error in connecting database  :( =>");
        return;
    }
    console.log(chalk.bgRedBright.white.underline(` Sever is up-to-date with database | :) =>-----------------------------------------------------------------------`));
})

module.exports = db;