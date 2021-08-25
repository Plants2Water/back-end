const router = require('express').Router();
const { 
    updateUserById,
    getAllPlantsForUser,
    getAllUsers,
} = require('./users-model');
const { checkUserIdExists } = require('./users-middleware');
const {
    validateUserBody, 
    validateTelephone,
    validateEmail,
    validateUsername,
} = require('../auth/auth_middleware'); //think about this in "put" - don't want to accept existing username, telephone or email

router.get(
    '/',
     async (req, res) => {
    res.json(await getAllUsers());
});

router.get(
    '/:user_id', 
    checkUserIdExists, 
    (req, res, next) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        next(error);
    }
});

router.put(
    '/:user_id', 
    checkUserIdExists, 
    validateUsername,
    validateTelephone,
    validateEmail,
    async (req, res, next) => {
        try {
            const updated = await updateUserById(req.params.user_id, req.body);
            res.status(200).json(updated);
            } catch (error) {
            next(error);
        }
});

router.get(
    '/:user_id/plants', 
    checkUserIdExists,
    async (req, res, next) => {
        try {
            const allPlants =  await getAllPlantsForUser(req.params.user_id);
            res.status(200).json(allPlants);
            } catch (error) {
            next(error);
        }
});

module.exports = router;
