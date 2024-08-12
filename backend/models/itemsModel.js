import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    size:{
        type:Number,
        required: true,
    }
});

export const Item = mongoose.model('Item', itemSchema);