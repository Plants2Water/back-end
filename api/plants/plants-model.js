const db = require('../data/db-config');

async function findPlantBy(filter) {
    return await db("plants")
    .where(filter)
    .select("*");
}

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

const updatePlantById  = async (plant) => {
    const [updatedPlant] = await db('plants')
    .where('plant_id', plant.plant_id)
    .update(plant, [
        "plant_id",
        "species",
        "nickname",
        "h2oFrequency",
        "last_watered",
        "photo_url",
        "notes",
        "user_id"
    ]);
    return updatedPlant;
};

module.exports = {
    findPlantBy,
    createPlant,
    updatePlantById,
};