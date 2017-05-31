const User = require ("../models/user");

module.exports = function(app, passport){

  app.get("/api/get_user", function(req, res, next){
    if(req.user){
      console.log("User logged in! 👍");
      res.json(req.user)
    } else {
      console.log("User ⛔ not logged in!");
      res.json({
        message: "Oops, you aren't logged in 🚫"
      })
    }
  });

  app.get("/api/logout", function(req,res,next){
    req.session.destroy();
    return res.json({
      loggedOut: "Successfully logged out, boo! 👋"
    });
  });

  app.post("/api/login", function(req,res,next){
    const authenticator = passport.authenticate("local-login", function(err,user,info){
      if (err) res.json({error: err.message});
      if (!user){
        return res.status(404).json(info.message);
      }
      req.logIn(user, function(err){
        if (err) res.json({error: err.message});
        return res.json({
          message: "Success! You have logged in.",
          user: user,
        });
      })
    })
    authenticator(req,res,next);
  });

  app.post("/api/signup", function(req,res,next){
    const authenticator = passport.authenticate("local-signup", function(err,user,info){
      if(err) res.send({error: err.message});
      if(!user){
          return res.status(404).json(info.message)
      } else {
        user.save(function(err){
          if (err) throw err;
          req.logIn(user, function(err){
            if (err) res.json({error: err.message})
            return res.json(user);
          });
        });
      }
    })
    authenticator(req,res,next);
  });

}
