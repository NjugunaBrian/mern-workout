import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;