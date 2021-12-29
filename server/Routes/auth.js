import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import User from '../models/User.js'


//Register
router.post('/register',async (req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
       const newUser = new User({
           name: req.body.username,
           email:req.body.email,
           password: hashedPass, 
           sale_item:req.body.sale_item,
           purchased_item:req.body.purchased_item  
            })
       const user = await newUser.save();
       res.status(200).send("user");

   } catch (error) {
       res.status(500).json(error);
   }
})

// Login
router.post('/login',async (req,res) =>{
      try {
          const user = await User.findOne({username: req.body.username});
          !user && res.status(400).json("Invalid Credentials");
          const validated = await bcrypt.compare(req.body.password,user.password);
          !validated && res.status(400).json("Invalid Credentials");
         const {password, ...others} = user._doc;
          res.status(200).json(others);
      } catch (error) {
          
      }
})



export default router