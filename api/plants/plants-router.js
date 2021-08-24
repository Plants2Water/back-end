const router = require('express').Router();
const { validatePlantBody, checkPlantIdExists } = require('./plants-middleware');
const { checkUserIdExists } = require('../users/users-middleware');
// const { getAllUsers } = require('../auth/auth-model');
const { createPlant, updatePlantById } = require('./plants-model');


router.post('/', validatePlantBody, checkUserIdExists, async (req, res, next) => {
    try {
        const newPlant = await createPlant(req.body);
        return res.status(201).json(newPlant);
    } catch (error) {
        next(error);
    }    
});

router.put('/', validatePlantBody, checkUserIdExists, checkPlantIdExists, async (req, res, next) => {
    try {
        const updatedPlant = await updatePlantById(req.body);
        return res.status(201).json(updatedPlant);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
