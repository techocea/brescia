const express = require("express");
const { submitContactForm } = require("../controllers/formController");
const router = express.Router();

router.post("/", submitContactForm);

module.exports = router;
