import mongoose from "mongoose";


const postSchema = mongoose.Schema(
    {
        lastName:{
            type:String,
            required:true,
        },
        location:String,
        Decription: String,
        picturePath: String,
        userPicturePath: String,
        likes:{
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    {Timestambs: true}
);

const Post = mongoose.model("Post",postSchema);

export default Post;