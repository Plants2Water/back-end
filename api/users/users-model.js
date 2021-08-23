const db = require('../data/db-config');
const { getById } = require('../auth/auth-model')

async function getAllUsers() { return await db('users'); }

async function updateUserById (id, user) {
    await db('users').where('user_id', id).update(user);
    return getById(id);
}

module.exports = {
    getAllUsers,
    updateUserById,
};