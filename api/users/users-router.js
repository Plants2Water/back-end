const router = require('express').Router();
const { 
    updateUserById,
    getAllPlantsForUser,
} = require('./users-model');
const { checkIdExists } = require('./users-middleware');
const { checkUsernameExists } = require('../auth/auth_middleware');

router.get(
    '/:id', 
    checkIdExists, 
    (req, res, next) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        next(error);
    }
});

router.put(
    '/:id', 
    checkIdExists,
    async (req, res, next) => {
        try {
            const updated = await updateUserById(req.params.id, req.body);
            res.status(200).json(updated);
            } catch (error) {
            next(error);
        }
});

router.get(
    '/:id/plants', 
    checkIdExists,
    async (req, res, next) => {
        try {
            const allPlants =  await getAllPlantsForUser(req.params.id);
            res.status(200).json(allPlants);
            } catch (error) {
            next(error);
        }
});

module.exports = router;
