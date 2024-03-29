const router = require("express").Router()
const userController = require("../Controller/userController")
var auth = require('../Services/auth');



router.get('/ping', userController.ping)
router.post("/login", userController.login)
router.post("/register", userController.register)

router.get("/info", auth.isAuthorized, userController.info)
router.put("/UpdateInfo", auth.isAuthorized, userController.UpdateInfo)
router.get("/Jobs", auth.isAuthorized, userController.getJobs)
router.post("/apply", auth.isAuthorized, userController.apply)
router.put("/UpdateAppliction", auth.isAuthorized, userController.UpdateAppliction)
router.get("/getMyapplicatinos/{id}", auth.isAuthorized, userController.info)
router.get("/Search/{id}", auth.isAuthorized, userController.info)


module.exports = router