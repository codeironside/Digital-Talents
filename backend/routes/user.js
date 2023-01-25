const express= require("express")
const { create, read, updated, deleted } = require("../controller/user")


const router = express.Router()


//create 
router.route("/create").post(create)


//read
router.route("/read").get(read)

//update
router.route("/update/:id").put(updated)


//delete
router.route("/delete/:id").delete(deleted)




module.exports=router