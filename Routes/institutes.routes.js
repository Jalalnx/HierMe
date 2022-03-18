const router = require("express").Router()
const institutes = require("../Controller/institutesController")


// router.post("/login", institutes.login)
router.post("/newProvider", institutes.newProvider)
    // router.get("/Jobs", institutes.getJobs)
    // router.put("/UpdateInfo", auth.isAuthor

module.exports = router;