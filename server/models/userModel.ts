import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from "validator";

interface IUser extends Document{
    _id: any;
    email: string,
    password: string,
}

interface userModel extends Model<IUser>{
    signup( email: string, password: string): Promise<IUser>
}

interface userModel extends Model<IUser>{
    login( email: string, password: string): Promise<IUser>
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

    //validation
    if(!email || !password){
        throw Error("All fields must be filled.")
    }

    if (!validator.isEmail(email)){
        throw Error("Email is not valid");
    }

    if (!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough");
    }
    const exists = await (this as any).findOne({ email })

    if (exists){
        throw Error('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await (this as any).create({ email, password: hashedPassword});
    return user
}

userSchema.statics.login = async function (email: string, password: string) : Promise<IUser>{
 
    
    if(!email || !password){
        throw Error("All fields must be filled.")
    }

    const user = await (this as any).findOne({ email })

    if (!user){
        throw Error('Invalid credentials');
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match){
        throw Error('Invalid credentials');
    }

    return user


}

const UserModel = mongoose.model<IUser, userModel>("UserModel", userSchema);

export default UserModel;