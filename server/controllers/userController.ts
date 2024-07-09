import { Response, Request, NextFunction } from "express";

//signup controller
export const signupUser = async(req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Signup user"});

}


//login controller
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Login a user"})    
}