const { findBy } = require('../auth/auth-model');
const { trimProperties } = require('../utils/index');

// checks to see that a username for a new registration is not in use
async function newUsernameUnused(req, res, next) { 
  const body = trimProperties(req.body);
  try {
    const { username } = body;
    const user = await findBy({ username: username }); 
    if (user.length) {
      next({ 
        status: 401, 
        message: `Username ${username} already in use` 
      });    
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}
// checks to see that a telephone number for a new registration is not in use
async function newTelephoneUnused(req, res, next) { 
  const body = trimProperties(req.body);
  try {
    const { telephone } = body;
    const user = await findBy({ telephone: telephone }); 
    if (user.length) {
      next({ 
        status: 401, 
        message: `Telephone number ${telephone} already in use` 
      });    
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}
// checks to see that a email address for a new registration is not in use
async function newEmailUnused(req, res, next) { 
  const body = trimProperties(req.body);
  try {
    const { email } = body;
    const user = await findBy({ email: email }); 
    if (user.length) {
      next({ 
        status: 401, 
        message: `Email address ${email} already in use` 
      });    
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}
// confirms that the username exists on a login
async function checkUsernameExists(req, res, next) { 
  const body = trimProperties(req.body);
  try {
    const { username } = body;
    const user = await findBy({ username: username }); 
    if (user.length) {
      req.user = user[0];
      next();
    } else {
      next({ 
        status: 401, 
        message: "Invalid credentials" 
      });
    }
  } catch (err) {
    next(err);
  }
}
// rejects if telephone in req.body belongs to a user with different user_id. user_id must be in req.body
async function validateTelephone(req, res, next) {
  const body = trimProperties(req.body);
  try {
    if (body.telephone && (body.user_id || req.params.user_id)) {
        const { telephone } = body;
        const user = await findBy({ telephone: telephone }); 
        if (!user.length) {
          next();
        } else if ((body.user_id == user[0].user_id) || (req.params.user_id == user[0].user_id)) {
          next();
        } else {
          next({ 
            status: 401, 
            message: `Telephone number ${telephone} is already in use`
          });
        }  
    } else {
      next();
    }
  } catch (err) {
      next(err);
  } 
}
// rejects if email in req.body belongs to a user with different user_id. user_id must be in req.body
async function validateEmail(req, res, next) {
  const body = trimProperties(req.body);
  try {
    if (body.email && (body.user_id || req.params.user_id)) {
      const { email } = body;
      const user = await findBy({ email: email }); 
      if (!user.length) {
        next();
      } else if ((body.user_id == user[0].user_id) || (req.params.user_id == user[0].user_id)) {
        next();
      } else {
        next({ 
          status: 401, 
          message: `Email address ${email} is already in use`
        });
      }
      } else {
        next();
      }
  } catch (err) {
      next(err);
  } 
}
// rejects if username in req.body belongs to a user with different user_id. user_id must be in req.body
async function validateUsername(req, res, next) { 
  const body = trimProperties(req.body);
  try {
    if (body.username && (body.user_id || req.params.user_id)) {
      const { username } = body;
      const user = await findBy({ username: username }); 
    if (!user.length) {
      next();
    } else if ((body.user_id == user[0].user_id) || (req.params.user_id == user[0].user_id)) {
      next();
    } else {
      next({ 
        status: 401, 
        message: `Username ${username} is already in use`
      });
    } 
  } else {
    next();
  }
} catch (err) {
  next(err);
  } 
}
  
const validateUserBody = (req, res, next) => {
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
        message: "Username, password, last name, first name, telephone and email address are all required"
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

// Password must contain at least 8 characters, one uppercase, one number and one special case character
const validatePassword = (req, res, next) => {
  const body = trimProperties(req.body);
  const { password } = body;
  try {
    if (/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(password)) {
      next(); 
    } else {
      next({
        status: 401,
        message: `Password must contain at least 8 characters; one uppercase, one number and one special case character`
      });
    }
  } catch (error){
    next(error);
  }
};

module.exports = { 
  newUsernameUnused,
  newEmailUnused,
  newTelephoneUnused,
  validateUsername,
  checkUsernameExists,
  validateUserBody,
  validateTelephone,
  validateEmail,
  validatePassword
};