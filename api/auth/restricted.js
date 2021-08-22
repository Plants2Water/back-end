const { JWT_SECRET } = require("../secrets/index"); // use this secret!
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if (token) {
    // async function
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            next({ status: 401, message: "token invalid" });
        } else {
            req.decodedJwt = decoded;
            next();
        }
    }); // old style node async callback, error first
        } else {
            next({ status: 401, message: "token required" });
    }

};
