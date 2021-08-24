const { findById } = require('../auth/auth-model');

async function checkUserIdExists(req, res, next) {
    let id = 0;
    try {
        if (req.params.user_id) {
            id = parseInt(req.params.user_id);
        } else {
            id = req.body.user_id;
        }
        const user = await findById(id); 
        if (user) {
        req.user = user;
        next();
        } else {
        next({ 
            status: 401, 
            message: `User ID ${id} does not exist` 
        });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { 
     checkUserIdExists,
};