module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Home",
  });
};

module.exports.signIn = function (req, res) {
  res.send("logged in succesfully");
};
module.exports.logut = function (req, res) {
  res.send("logged in succesfully");
};
