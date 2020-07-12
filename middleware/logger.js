// Sets EJS Variables - Can call these from any ejs view using the varibale name eq, app.locals.title => title on ejs view
// Express Session
const express = require('express');
const app = express();

const session = require('express-session');

module.exports = {
  //   logger: (req, res, next) => {
  //     // Logged In User Info available anywhere
  //     app.locals.userId = req.session.userId;
  //     app.locals.username = req.session.username;
  //     app.locals.admin = req.session.admin;
  //     next();
  //   },
  //   expSession: session({
  //     secret: 'keyboard cat', // i dont know some kind of cat? meow
  //     resave: false,
  //     saveUninitialized: true,
  //   }),
  urlReplacer: (req, res, next) => {
    app.locals.title = req.url.replace('/', '| '); // Sets title to url replacing / with |
    next();
  },
};
