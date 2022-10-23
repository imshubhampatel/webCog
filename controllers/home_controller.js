const User = require("../models/user");


module.exports.profile = function (req, res) {
    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id, function (err, user) {
            if (user) {
                return res.render("user", {
                    title: "User Profile",
                    user: user
                })

            }
        });

    } else {
        return res.redirect("/user/sign-in")
    }
}



// rendering the Sign-Up-Page 
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Codial | Sign Up"
    });
};

// rendering the Sign-In-Page 
module.exports.signIn = function (req, res) {
    return res.render('user_sign_In', {
        title: "Codial | Sign In"
    });
};


module.exports.create = function (req, res) {
    let userInfo = req.body;

    if (userInfo.password != userInfo.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({
        email: userInfo.email
    }, function (err, user) {
        if (err) {
            console.log('err in finding user Siging up', err);
            return;
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log('err in finding user Siging up', err);
                    return;
                }
                if (user) {
                    res.redirect("/user/sign-in");
                }

            })
        } else {
            return res.redirect('back');
        }
    })
}


module.exports.createSession = function (req, res) {

    // finding the user first 
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        // handle eror of data sharing 
        if (err) {
            console.log("Error in siginng in with finding contact", err)
        }

        // if user were not in database then 
        if (!user) {
            return res.redirect("/user/sign-up");
        }

        // user password authentication 
        if (user) {
            
            if (user.password != req.body.password) {
                return res.redirect('back');
            }

            // if password match then we create coockie
            else if (user.password === req.body.password) {
                res.cookie("user_id", user._id)
                return res.redirect("/user/profile");
            }

        }
        // anything else user return here 
        else {
            res.redirect('back');
        }
    })
}