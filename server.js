const express = require("express");
// const passport = require('passport');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"));
} else { 
  app.use(express.static("client/public"));
};

// Add routes, both API and view
app.use(routes);

// set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CodePro", { useUnifiedTopology: true,  useNewUrlParser: true  });


// Add Passport code
// passport.use(new CodePros(
//   function(username, password, done) {
//     CodePros.findOne({ username: username }, function (err, CodePros) {
//       if (err) { return done(err); }
//       if (!CodePros) { return done(null, false); }
//       if (!CodePros.verifyPassword(password)) { return done(null, false); }
//       return done(null, CodePro);
//     });
//   }
// ));

// passport.serializeUser(function(CodePro, done) {
//   done(null, CodePro.id);
// });
 
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function (err, CodePro) {
//     done(err, CodePro);
//   });
// });

// // app.use(require('serve-static')(__dirname + '/../../public'));
// app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// // app.use(passport.initialize());
// app.use(passport.session())

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
