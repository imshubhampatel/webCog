const Contact = require("../models/contact");
module.exports.home = (req, res) => {
  return res.render("home");
};

module.exports.createSession = (req, res) => {
  let body = req.body;
  Contact.create(req.body);
  return res.send("Hiii there from pradeep side, contact created successfully");
};

module.exports.getSession = (req, res) => {
  let body = req.body;
  Contact.finOne(req.body);
  return res.send(
    "Hiii there from pradeep side, contact retrived successfully"
  );
};
