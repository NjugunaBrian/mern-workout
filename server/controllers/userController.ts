import { Response, Request, NextFunction } from "express";
import UserModel from '../models/userModel';

//signup controller
export const signupUser = async(req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    try{
        const user = await UserModel.signup( email, password)

        res.status(200).json({ email, user})

    } catch (error : any){
        res.status(400).json({ error: error.message})
    }

}


//login controller
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Login a user"})    
}