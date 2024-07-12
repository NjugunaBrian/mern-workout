import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import UserModel, { IUser } from '../models/userModel';

interface CustomJwtPayload extends JwtPayload{
    _id: string;
}

interface AuthenticatedRequest extends Request{
    user: IUser | null
}

const requireAuth =  (req: Request, res: Response, next: NextFunction) => {
    const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        //verify authorization
        const authorization  = req.headers.authorization

        if (!authorization){
            res.status(401).json({ error: 'Authorization token required' })
            return
        }

        let token: string;
        
        try {
            const parts = authorization!.split(' ');
      
            if (parts.length !== 2 || parts[0] !== 'Bearer') {
              res.status(401).json({ error: 'Authorization header format must be "Bearer <token>"' });
              return
            }
      
            token = parts[1];
          } catch (error) {
            res.status(401).json({ error: 'Invalid authorization header' });
            return
          }
      
        try{
            const { _id } = jwt.verify(token, process.env.SECRET!) as CustomJwtPayload

            req.user = await UserModel.findOne({ _id }).select('_id');
            next();

        } catch (error){
            console.log(error)
            res.json(401).json({ error: 'Request is not authorized' })

        }
    
    }; 
    
    return authMiddleware(req as AuthenticatedRequest, res, next);

}

export default requireAuth;