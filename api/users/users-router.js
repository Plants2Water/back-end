const router = require('express').Router();
const { 
    updateUserById,
    getAllPlantsForUser,
    getAllUsers,
} = require('./users-model');
const { checkUserIdExists } = require('./users-middleware');
// const { checkUsernameExists } = require('../auth/auth_middleware'); //think about this in "put" - don't want to take existing username

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
    async (req, res, next) => {
        try {
            const updated = await updateUserById(req.params.id, req.body);
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
            const allPlants =  await getAllPlantsForUser(req.params.id);
            res.status(200).json(allPlants);
            } catch (error) {
            next(error);
        }
});

module.exports = router;
