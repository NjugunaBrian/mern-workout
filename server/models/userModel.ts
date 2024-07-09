import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document{
    email: string,
    password: string,
}

interface userModel extends Model<IUser>{
    signup( email: string, password: string): Promise<IUser>
}

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
});

//static signup method
userSchema.statics.signup = async function (email:string, password:string): Promise<IUser> {
    const exists = await (this as any).findOne({ email })

    if (exists){
        throw Error('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await (this as any).create({ email, password: hashedPassword});
    return user
}

const UserModel = mongoose.model<IUser, userModel>("UserModel", userSchema);

export default UserModel;