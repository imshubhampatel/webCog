const passport = require('passport');
const localStrategy = require("passport-local").Strategy;
const user = require("../models/user")



// authentication using passport js 
passport.use(new localStrategy({
    usernameField: "email"
},
    // function for taking the email password
    function (email, password, done) {
        // finding user and establish identity 
        user.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("Error in finding user-----> passport");
                return done(err);
            }
            if (!user || user.password != password) {
                console.log("Invalid username and password");
                return done(null, false);
            }
            return done(null, user)
        }

        )
    }
));


// serializeUser user to deside which key is to be kept in cookies function 

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// DeserializeUser user from the key of the cookie
passport.deserializeUser(function (id, done) {
    user.findById(id, function (err, user) {
        if (err) {
            console.log("Error in deserialize user", err);
            return done(err);
        }
        return done(null, user);
    });
});

// check if user is authenticated 
passport.checkAuthentication = function (req,res,next){
    if(req.isAuthenticated()){
        return next();

    }
    return res.redirect(("/users/sign-in"))
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated){
        req.locals.user = req.user
    }
}
module.exports = passport;