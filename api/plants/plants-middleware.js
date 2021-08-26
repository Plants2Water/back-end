const { findPlantBy } = require('./plants-model');
const { validateDateFormat, trimProperties } = require('../utils/index');

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
  req.body = trimProperties(req.body);
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

  const validateLastWatered = (req, res, next) => {
    req.body = trimProperties(req.body);
    const { last_watered } = req.body;
    try {
      if (validateDateFormat(last_watered)) {
        next(); 
      } else {
        next({
          status: 401,
          message: `Last watered date must be in MM/DD/YYYY format`
        });
      }
    } catch (error){
      next(error);
    }
  };

  module.exports = {
    checkPlantIdExists,
    validatePlantBody,
    validateLastWatered
 };