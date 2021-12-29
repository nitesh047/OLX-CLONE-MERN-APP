import express from 'express';
const router = express.Router();
import Item from '../models/ItemPurchased.js'

router.post('/', async (req,res)=>{
    const item =  new Item(req.body);
    try {
        const newItem = await item.save();
        res.status(200).json(newItem);
    } catch (error) {
        res.status(400).json(error);
    }
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
              items  = await Item.find({username});
            }
            else{
               items = await Item.find();
            }
            res.status(200).json(items);
        } catch (error) {
            res.status(400).json(error);
        }
    })
   
   });

   export default router