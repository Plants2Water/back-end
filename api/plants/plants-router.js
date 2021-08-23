const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json(await getAllUsers());
});

module.exports = router;
