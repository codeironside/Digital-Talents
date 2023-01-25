const USER = require("../model/user");
const AsyncHandler = require("express-async-handler");

//@desc create user
//route API user/create
//access publiv
const create = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) {
    res.status(422);
    throw new Error("not validated");
  }
  const userexist = await USER.findOne({ email: email });

  if (userexist) {
    res.status(401);
    throw new Error("user exist");
  }

  const user = await USER.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(200).json({
      message: user,
    });
  } else {
    res.status(401);
    throw new Error("user not gotten");
  }
});

//@desc create user
//route API user/create
//access publiv
const read = AsyncHandler(async (req, res) => {


    const {email}= req.body
    if(!email){
        res.status(422)
        throw new Error("not validated")
    }

    const user= await USER.findOne({email:email})
    if(user){
        res.status(200).json({message:user})

    }else{
        res.status(404)
        throw new Error("user not founf")
    }
});

//@desc create user
//route API user/create
//access publiv
const updated = AsyncHandler(async (req, res) => {

    const {password}=req.body
    if(!password){
        res.status(401)
        throw new Error("invalid input")



    }
    

    const user = await USER.findByIdAndUpdate(req.params.id ,{password:password},{new:true})
    if (user){
        res.status(200)
        .json({message:user})
    }else{
        res.status(401)
        throw new Error("user not found");
    }
});

//@desc create user
//route API user/create
//access publiv
const deleted = AsyncHandler(async (req, res) => {

const user = await USER.findById(req.params.id)
if (!user){
    res.status(404)
    throw new Error("user not found")
}else{

   const user = await USER.findByIdAndDelete(req.params.id)
        if (!user){ 
            res.status(200).json({ message: 'User deleted successfully' })
            }else{
                res.status(201).json({ message: 'User deleted successfully' })
        }
    };


});


module.exports = { create, read, updated, deleted };
