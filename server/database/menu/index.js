import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
    menu: [
        {
            name: { type: String, required: true },
            items: {
                type: mongoose.Types.ObjectId,
                ref: "Foods"
            }
        }
    ],

    recommneded: [{
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true,


    }]
},
    {
        timestamps: true
    })


export const MenuModel = mongoose.model("Menu", MenuSchema)