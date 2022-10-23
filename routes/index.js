const express = require('express');
const { config } = require('process');
const router = express.Router();
const homeController = require("../controller/home_controller")

router.get('/', homeController.home);
router.use('/user', require("./user"));



module.exports = router;