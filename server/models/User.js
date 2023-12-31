import mongoose from "mongoose";


const UserSchmea = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            main:2,
            max:50,
        },
        lastName:{
            type: String,
            required: true,
            main:2,
            max:50,
        },
        email:{
            type: String,
            required: true,
            main:2,
            max:50,
            unique: true
        },
        PicturePath:{
            type: String,
            require: true,
            default:""
        },
        friends: {
            type: Array,
            require: true,
            default:[]
        },
        location: String,
        occupation: String,
        viewProfile: Number,
        impressions: Number,
        
       
        
    },{timestamps:true}
);

const User = mongoose.model("User", UserSchmea);
export default User;