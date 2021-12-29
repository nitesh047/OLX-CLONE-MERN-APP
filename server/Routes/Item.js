import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import Item from '../models/ItemSale.js'


//Create
router.post('/', async (req,res)=>{
 const item =  new Item(req.body);
 try {
     const newItem = await item.save();
     res.status(200).json(newItem);
 } catch (error) {
     res.status(400).json(error);
 }

});

 
router.put('/:id', async (req,res)=>{
    try {
        const item =await Item.findById(req.params.id);
        if(item.username === req.body.username){
            try {
                const newItem = await Item.findByIdAndUpdate(req.params.id,{
                    $set:req.body,
                },{new:true})
                res.status(200).json(newItem);
            } catch (error) {
                res.status(400).json(error);
            }
        }
        else{
            res.send("You can update only your Item")
        }
      } catch (error) {
        res.status(400).json(error);
    }
 
 });

 
router.delete('/:id', async (req,res)=>{
    try {
        const item =await Item.findById(req.params.id);
         
            try {
                const newPost = await Item.findByIdAndDelete(req.params.id);
                res.status(200).json("Item has been deleted");
            } catch (error) {
                res.status(400).json(error);
            }
         
      } catch (error) {
        res.status(400).json(error);
    }
 
 });


 router.get('/:id', async(req,res) =>{
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/', async(req,res)=>{
    const username = req.query.user;
    // const catName = req.query.cat;
    
    try {
        let items;
        if(username){
          items  =await Item.find({username});
        }
        else{
           items = await Item.find();
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json(error);
    }
})
export default router