const { findBy } = require('./auth-model');

async function validateUsername(req, res, next) {
    try {
      const { username } = req.body;
      const user = await findBy({ username: username }); 
      if (user.length) {
        req.user = user[0];
        next();
      } else {
        next({ 
          status: 401, 
          message: "invalid credentials" 
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async function checkUsernameExists(req, res, next) {
    try {
      const { username } = req.body;
      const user = await findBy({ username: username }); 
      if (!user.length) {
        next();
      } else {
        next({ 
          status: 401, 
          message: "username taken" 
        });
      }
    } catch (err) {
      next(err);
    }
  }
  
  const validateBody = (req, res, next) => {
    try {
      const { 
          username, 
          password,
          lastName,
          firstName,
          telephone,
          email
        } = req.body;
      if (
          !username || 
          !password ||
          !lastName ||
          !firstName ||
          !telephone ||
          !email
          ) {
        next({
          status: 401,
          message: "username, password, last name, first name, telephone and email address are all required"
        });
      }
        next();
    } catch (error) {
        next(error);
    }
  };

  module.exports = { 
      validateUsername,
      checkUsernameExists,
      validateBody
 };