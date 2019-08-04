require('dotenv').config();
const express = require('express');
const app = new express();
const parser = require('body-parser');
const passport = require('./config/passport');
const routes = require('./routes/auth');

app.use(passport.initialize());
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4545"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', (req, res) => {
    console.log("hope");
    res.json({
      message: 'Welcome to the API'
      
    });
  });

  app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
      id: 1, 
      username: 'brad',
      email: 'brad@gmail.com'
    }
    console.log(req.body);
    
  
    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
      res.json({
        token
      });
    });
  });
  

// app.listen(5000, () => console.log('Server started on port 5000'));