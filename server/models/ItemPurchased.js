import mongoose from 'mongoose';

// 1. Name of item
// 2. Category
// 3. Price listed
// 4. Picture of item


const ItemSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
       name:{
           type:String,
           required:true,
    
       },
       category:{
           type:String,
           required:true,
       },
       price:{
           type:Number,
           required:true
       },
       photo:{
           type:String,
           required:false
       }
    },
        {timestamps:true}
)
 const ItemSc = mongoose.model("ItemPurchased",ItemSchema);
 export default ItemSc;