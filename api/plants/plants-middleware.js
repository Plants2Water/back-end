const { findPlantBy } = require('./plants-model');

async function checkPlantIdExists(req, res, next) {
  let id = 0;
  try {
      if (req.params.plant_id) {
          id = req.params.plant_id;
      } else {
          id = req.body.plant_id;
      }
      const [plant] = await findPlantBy({ plant_id: id }); 
      if (plant) {
        req.plant = plant;
        next();
      } else {
      next({ 
          status: 401, 
          message: `Plant ID ${id} does not exist` 
      });
      }
  } catch (err) {
      next(err);
  }
}

const validatePlantBody = (req, res, next) => {
    try {
      const { nickname } = req.body;
      if (!nickname) {
        next({
          status: 401,
          message: "Plant must have a nickname"
        });
      }
        next();
    } catch (error) {
        next(error);
    }
  };

  module.exports = {
    checkPlantIdExists,
    validatePlantBody
 };