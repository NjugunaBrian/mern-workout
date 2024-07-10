import { Response, Request, NextFunction } from "express";
import UserModel from '../models/userModel';
import jwt from "jsonwebtoken";

const createToken = (_id: any) => {
    return jwt.sign({ _id }, process.env.SECRET!, { expiresIn: '3d'})
}

//signup controller
export const signupUser = async(req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    try{
        const user = await UserModel.signup( email, password)

        //create a token
        const token = createToken(user._id);


        res.status(200).json({ email, token})

    } catch (error : any){
        res.status(400).json({ error: error.message})
    }

}


//login controller
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    try{
        const user = await UserModel.login( email, password)

        //create a token
        const token = createToken(user._id);


        res.status(200).json({ email, token})

    } catch (error : any){
        res.status(400).json({ error: error.message})
    }

}