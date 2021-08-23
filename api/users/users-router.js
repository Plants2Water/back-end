const router = require('express').Router();
const { findById } = require('../auth/auth-model');

const { 
    checkIdExists
} = require('./users-middleware');

router.get('/:id', checkIdExists, (req, res, next) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        next(error);
    }

});

module.exports = router;
