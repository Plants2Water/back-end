const router = require('express').Router();
const { validatePlantBody, checkPlantIdExists, validateLastWatered } = require('./plants-middleware');
const { checkUserIdExists } = require('../users/users-middleware');
// const { getAllUsers } = require('../auth/auth-model');
const { createPlant, updatePlantById, deleteByPlantId } = require('./plants-model');
const { trimProperties } = require('../utils/index');


router.get(
    '/:plant_id', 
    checkPlantIdExists, 
    (req, res, next) => {
    try {
        res.status(200).json(req.plant);
    } catch (error) {
        next(error);
    }
});

router.post(
    '/', 
    validatePlantBody, 
    checkUserIdExists,
    validateLastWatered, 
    async (req, res, next) => {
    const body = trimProperties(req.body);
    try {
        const newPlant = await createPlant(body);
        return res.status(201).json(newPlant);
    } catch (error) {
        next(error);
    }    
});

router.put(
    '/', 
    checkUserIdExists, 
    checkPlantIdExists,
    validateLastWatered,
     async (req, res, next) => {
    const body = trimProperties(req.body);
    try {
        const updatedPlant = await updatePlantById(body);
        return res.status(201).json(updatedPlant);
    } catch (error) {
        next(error);
    }    
});

router.delete('/', checkPlantIdExists, async (req, res, next) => {
    const { plant_id } = req.body;
    try {
        await deleteByPlantId(plant_id);
        return res.status(200).json(req.plant);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
