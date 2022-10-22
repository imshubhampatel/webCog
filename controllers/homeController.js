const Contact = require("../models/contact")
module.exports.home = (req, res) => {
    return res.render('home');
}

module.exports.createSession = (req, res) => {
    let body = req.body;
    Contact.create(req.body);
    return res.send("home succeessffyly");

    
    
}
