const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add } = require('./auth-model');
const { 
    checkUsernameExists, 
    validateBody, 
    validateUsername
} = require('../auth/auth_middleware');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index.js");

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

router.post('/register', validateBody, checkUsernameExists, async (req, res, next) => {
      try {
        const {
            username, 
            password,
            lastName,
            firstName
         } = req.body;
        const hash = bcrypt.hashSync(password, 8);
        const user = { 
            username, 
            password: hash,
            lastName,
            firstName
        };
        const newUser = await add(user);
        res.status(201).json(newUser);
      } catch (error) {
        next(error);
      }
});

router.post('/login', validateUsername, (req, res, next) => {
    try {
        const { password } = req.user;
        if (bcrypt.compareSync(req.body.password, password)) {
         const token = buildToken(req.user);
  
          // req.session.user = req.user;
  
          res.json({ 
            message: `welcome, ${req.user.username}`,
            token: token,
        });
        } else {
          next({ status: 401, message: "invalid credentials" });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
