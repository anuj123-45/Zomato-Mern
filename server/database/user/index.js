import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
    profilePic:{type:String}
}, {
    timestamps: true
}
)

// Generate a token
UserSchema.methods.generateToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};


UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {

    // check whether email or phoneno exist
    const user = await UserModel.findOne({
        $or: [{ email }, { phoneNumber }]
    });

    if (user) {
        throw new Error('User Already Exists...');
    }
    return false;
}

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    // check whether email exist
    const user = await UserModel.findOne({ email })
    if (!user) throw new Error('User doest not exist');

    // compare the password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error('inavlid password')

        return user;
}


UserSchema.pre("save", async function (next) {
    const user = this;

    // If the password is not modified, skip the hashing
    if (!user.isModified("password")) return next();

    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(8);
        user.password = await bcrypt.hash(user.password, salt);
        next();  // Proceed to the next middleware or save
    } catch (error) {
        next(error);  // Pass error to the next middleware
    }
});

export const UserModel = mongoose.model("Users", UserSchema)

