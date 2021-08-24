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
      validatePlantBody
 };