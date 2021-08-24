const router = require('express').Router();
const { validatePlantBody } = require('./plants-middleware');
// const { getAllUsers } = require('../auth/auth-model');
const { createPlant } = require('./plants-model');


router.post('/', validatePlantBody, async (req, res, next) => {
    try {
        const newPlant = await createPlant(req.body);
        return res.status(201).json(newPlant);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
