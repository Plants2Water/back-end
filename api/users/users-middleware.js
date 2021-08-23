const { findBy } = require('../auth/auth-model');

async function checkIdExists(req, res, next) {
    try {
        const { id } = req.params;
        const user = await findBy({ id: id }); 
        if (user.length) {
        req.user = user;
        next();
        } else {
        next({ 
            status: 401, 
            message: `ID ${id} does not exist` 
        });
        }
    } catch (err) {
        next(err);
    }
}
  


  module.exports = { 
     checkIdExists,
 };