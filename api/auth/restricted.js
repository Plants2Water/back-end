const { JWT_SECRET } = require("../secrets/index");
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            next({ status: 403, message: "Token invalid" });
        } else {
            req.decodedJwt = decoded;
            next();
        }
    });
        } else {
            next({ status: 401, message: "Token required" });
    }
};
