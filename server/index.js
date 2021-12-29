import express from 'express';
import mongoose from 'mongoose';
import authRoute from './Routes/auth.js';
import itemRoute from './Routes/Item.js';
import itemPurchasedRoute from './Routes/PurchsedItem.js';
import cors from 'cors'

const app = express();
app.use(express.json());
const PORT = 5000;



app.use(cors());

app.use('/api/auth',authRoute);
app.use('/api/item',itemRoute);
app.use('/api/purchased',itemPurchasedRoute)
const  URL =  'mongodb+srv://nitesh:nitesh123@cluster0.atb5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex: true,
}) .then(console.log("backend is running"));


app.listen(PORT,()=>{
    console.log("Server is running");
})