const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add } = require('./auth-model');
const { 
  newUsernameUnused,
  checkUsernameExists, 
  validateUserBody, 
  newEmailUnused,
  newTelephoneUnused,
} = require('../auth/auth_middleware');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index.js");
const { trimProperties } = require('../utils/index');

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
  newUsernameUnused,
  newEmailUnused,
  newTelephoneUnused,
  async (req, res, next) => {
  const body = trimProperties(req.body);
      try {
        const {
            username, 
            password,
            last_name,
            first_name,
            telephone,
            email
         } = body;
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
  (req, res, next) => {
    const body = trimProperties(req.body);
    try {
        const { password } = req.user;
        if (bcrypt.compareSync(body.password, password)) {
         const token = buildToken(req.user);
  
          // req.session.user = req.user;
  
          res.json({ 
            message: `welcome, ${req.user.username}`,
            token: token,
        });
        } else {
          next({ status: 401, message: "Invalid credentials." });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
