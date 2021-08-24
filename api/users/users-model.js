const db = require('../data/db-config');
const { findById } = require('../auth/auth-model');


function getAllUsers() {
    return db("users");
}

const updateUserById  = async (user_id, user) => {
    await db('users')
    .where('user_id', user_id)
    .update(user);
    return findById(user_id);
};

const getAllPlantsForUser  = async (user_id) => {
    return await db('plants')
    .where('user_id', user_id);
};

module.exports = {
    getAllUsers,
    getAllPlantsForUser,
    updateUserById,
};