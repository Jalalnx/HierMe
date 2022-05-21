const router = require("express").Router()
const institutes = require("../Controller/institutesController")
const { check } = require('express-validator');

// router.post("/login", institutes.login)
router.post("/newProvider",check('photo').not().isEmpty(),check('logo').not().isEmpty(), institutes.newProvider)
router.post("/login", institutes.login)
    // router.put("/UpdateInfo", auth.isAuthor

module.exports = router;