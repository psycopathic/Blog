import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "", 
        },
        text:{
            type: String,
            required: true
        },
        author:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"User"
        }
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;