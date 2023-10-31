// Purpose: Handle all routes related to login.
const express = require("express");
const router = express.Router();

const {
    handleSendEmail,
} = require("../controllers/index");

router.route("/")
    .post(handleSendEmail);

module.exports = router;