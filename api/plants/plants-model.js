const db = require('../data/db-config');

const createPlant = async (plant) => {
    const [newPlant] = await db('plants')
    .insert(plant, [
        "plant_id",
        "species",
        "nickname",
        "h2oFrequency",
        "last_watered",
        "photo_url",
        "notes",
        "user_id"
    ]);
    return newPlant;
  };

module.exports = {
    createPlant,
};