import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"

declare global{
    namespace express{
        interface Request{
            userId?: String
        }
    }
};

export default function(req: Request, res: Response, next: NextFunction){
    const tokenHeader = req.headers.authorization
    
    if(!tokenHeader){
        return res.status(401).json({messagge: "Token is mandatory"})
    }
    jwt.verify(tokenHeader, "my-secret", (err, decoded)=>{
        if(err){
            return res.status(401).json({messagge: "invalid token"})
        }

        return next()

    })

}