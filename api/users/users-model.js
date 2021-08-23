const db = require('../data/db-config');

async function getAllUsers() { return await db('users'); }
