const { findBy } = require('../auth/auth-model');

async function checkUsernameExists(req, res, next) {
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

async function validateTelephone(req, res, next) {
  try {
    const { telephone } = req.body;
    const user = await findBy({ telephone: telephone }); 
    if (!user.length) {
      next();
    } else {
      next({ 
        status: 401, 
        message: `Telephone number ${telephone} is already in use.`
      });
    }
  } catch (err) {
    next(err);
  }
}

async function validateEmail(req, res, next) {
  try {
    const { email } = req.body;
    const user = await findBy({ email: email }); 
    if (!user.length) {
      next();
    } else {
      next({ 
        status: 401, 
        message: `Email address ${email} is already in use.`
      });
    }
  } catch (err) {
    next(err);
  }
}

async function validateUsername(req, res, next) {
  try {
    const { username } = req.body;
    const user = await findBy({ username: username }); 
    if (!user.length) {
      next();
    } else {
      next({ 
        status: 401, 
        message: `Username ${username} is already in use.`
      });
    }
  } catch (err) {
    next(err);
  }
}
  
const validateUserBody = (req, res, next) => {
  try {
    const { 
        username, 
        password,
        last_name,
        first_name,
        telephone,
        email
      } = req.body;
    if (
        !username || 
        !password ||
        !last_name ||
        !first_name ||
        !telephone ||
        !email
        ) {
      next({
        status: 401,
        message: "username, password, last name, first name, telephone and email address are all required"
      });
    } else {
      next();
    }
  } catch (error) {
      next(error);
  }
};

module.exports = { 
    validateUsername,
    checkUsernameExists,
    validateUserBody,
    validateTelephone,
    validateEmail
};