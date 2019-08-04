require('dotenv').config();
const express = require('express');
const app = new express();
const parser = require('body-parser');
const passport = require('./config/passport');
const routes = require('./routes/auth');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
  next();
});
app.use(passport.initialize());
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.use(routes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port 5000'));
