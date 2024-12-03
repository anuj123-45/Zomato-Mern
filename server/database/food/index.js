import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, require: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price:{type:Number,default:150,required:true},
    addOns:[{
        type: mongoose.Types.ObjectId,
        ref:"Foods"
    }
    ],
    restarant:{
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
        required:true
    }
})


export const FoodModel=mongoose.model("Foods",FoodSchema)