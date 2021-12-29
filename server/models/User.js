import mongoose from 'mongoose';

// 1. Name
// 2. Email
// 3. Password
// 4. List of items this user has on sale
// 5. List of purchased items
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },

    },
        {timestamps:true}
)
 
const UserModel = mongoose.model("User",UserSchema);
export default UserModel;