const router = require('express').Router();
// const { getAllUsers } = require('../auth/auth-model');
const { createPlant } = require('./plants-model');


router.post('/', async (req, res, next) => {
    try {
        // const { user_id } = req.body;
        const newPlant = await createPlant(req.body);
        return res.status(201).json(newPlant);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
