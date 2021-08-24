const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add } = require('./auth-model');
const { 
    checkUsernameExists, 
    validateUserBody, 
    validateUsername,
    validateTelephone,
    validateEmail
} = require('../auth/auth_middleware');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index.js");

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: '7d',
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

router
.post(
  '/register',
  validateUserBody, 
  validateUsername,
  validateEmail,
  validateTelephone,
  async (req, res, next) => {
      try {
        const {
            username, 
            password,
            last_name,
            first_name,
            telephone,
            email
         } = req.body;
        const hash = bcrypt.hashSync(password, 8);
        const user = { 
            username, 
            password: hash,
            last_name,
            first_name,
            telephone,
            email
        };
        const newUser = await add(user);
        res.status(201).json(newUser);
      } catch (error) {
        next(error);
      }
});

router.post(
  '/login', 
  checkUsernameExists, 
  validateUserBody,
  validateEmail,
  validateTelephone,
  (req, res, next) => {
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
