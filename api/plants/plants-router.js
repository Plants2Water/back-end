const router = require('express').Router();
const db = require('../data/db-config');

async function getAllUsers() { return await db('users'); }

router.get('/', async (req, res) => {
    res.json(await getAllUsers());
});

module.exports = router;
