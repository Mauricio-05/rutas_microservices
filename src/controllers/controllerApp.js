const microservice = "ruta";

const dateTime = require("date-and-time");

const responseAPI = (req, res, next) => {
  const date = new Date();
  res.status(200).json({
    status: 200,
    state: `El microservicio ${microservice} se encuentra en construcción y se hizo una petición de tipo ${req.method} a la ruta ${req.originalUrl}`,
    fecha: dateTime.format(date, "DD/MM/YYYY HH:MM:SS"),
  });
};

module.exports = {
  microservice,
  responseAPI,
};
