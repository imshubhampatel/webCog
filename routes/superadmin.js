const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.post("/create-session", homeController.createSession);
router.post("/get-session", homeController.createSession);
router.post("/make-session-env", homeController.createSession);


module.exports = router;