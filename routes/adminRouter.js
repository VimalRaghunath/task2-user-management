const express=require("express")
const router=express.Router()
const controller = require("../controllers/controller")
const multer = require('multer')
const upload=multer({dest:'uploads/'})
const tryCatch=require("../middleware/trycatchmiddleware")
const verifyToken=require("../middleware/authmiddleware")

router.use(express.json());

router.post("/register",tryCatch(controller.register))
router.post("/login",tryCatch(controller.login))
router.post("/users",verifyToken,upload.single('photo'),tryCatch(controller.createuser))
router.get("/users",verifyToken,tryCatch(controller.getallusers))
router.get("/user/:id",verifyToken,tryCatch(controller.getuserByid))
router.put("/user/:id",verifyToken,tryCatch(controller.updateuserByid))
router.delete("/user/:id",verifyToken,tryCatch(controller.deleteuserByid))

module.exports = router;