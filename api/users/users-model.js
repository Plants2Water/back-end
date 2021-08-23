const db = require('../data/db-config');
const { findById } = require('../auth/auth-model');

const updateUserById  = async (id, user) => {
    await db('users')
    .where('user_id', id)
    .update(user);
    return findById(id);
};

const getAllPlantsForUser  = async (id) => {
    return await db('plants')
    .where('user_id', id)
};

module.exports = {
    getAllPlantsForUser,
    updateUserById,
};