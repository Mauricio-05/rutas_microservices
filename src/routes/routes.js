const router = require("express").Router();
const { microservice, responseAPI } = require("../controllers/controllerApp");

router.route(`/${microservice}`).get(responseAPI).post(responseAPI);

router.get(`/${microservice}/:id`, responseAPI);
router.delete(`/${microservice}/:id`, responseAPI);
router.put(`/${microservice}/:id`, responseAPI);

router.get(`/${microservice}/geografico`, responseAPI);

module.exports = router;
