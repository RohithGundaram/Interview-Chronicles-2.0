import mongoose,{ Schema } from "mongoose";

const PostSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    tags : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
    },
    likes : {
        type : Number,
        // required : true,
        default : 0,
    },
    photo : {
        type : String,
    },
});


const Posts = mongoose.models.Posts || mongoose.model("Posts", PostSchema);
export default Posts;