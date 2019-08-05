const User = require('../../models/user');
const router = require('express').Router();
const passport = require('../../config/passport');
const jwt = require('jsonwebtoken');
const localStorage = require('localStorage')
router.get('/getUser', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.send(req.user);
});

router.post('/seedUser', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(401).send('no fields');
  }
  
  const user = new User({
    email: req.body.email,
    password: req.body.password
    
  });

  user.save().then(() => {
    res.send('ok');
  });
});

router.post('/getToken', (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(401).send('no fields');
    }
    // return res.status(200).send('ok');
    User.forge({ email: req.body.email }).fetch().then(result => {
      if (!result) {
        return res.status(400).send('user not found');
      }
      let mail = req.body.email
      
        if(mail.includes('guest'))
          localStorage.setItem('userRole', 'guest')
        else if(mail.includes('admin'))
          localStorage.setItem('userRole', 'admin')
      
      result.authenticate(req.body.password).then(user => {
        const payload = { id: user.id };
        const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
        res.send(token);
      }).catch(err => {
        return res.status(401).send({ err });
      });
    });
  }
);

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('i\'m protected');
});

module.exports = router;
