const router = require("express").Router()
const userController = require("../Controller/userController")
var auth = require('../middelware/auth');
const controller = require("../Controller/file.controller");



router.get('/ping', userController.ping)
router.post("/login", userController.login)
router.post("/register", userController.register)
router.get("/Jobs", userController.getJobs)
router.post("/file/upload", controller.upload);
// router.get("/files", controller.getListFiles);
// router.get("/files/:name", controller.download);
// router.put("/UpdateInfo", auth.isAuthorized, userController.UpdateInfo)

// router.post("/apply", auth.isAuthorized, userController.apply)
// router.put("/UpdateAppliction", auth.isAuthorized, userController.UpdateAppliction)
// router.get("/getMyapplicatinos/{id}", auth.isAuthorized, userController.info)
// router.get("/Search/{id}", auth.isAuthorized, userController.info)


module.exports = router