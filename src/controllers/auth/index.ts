import { PrismaClient } from "@prisma/client";
import {Request, Response}  from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

const signUp = async(req: Request, res: Response)=>{
    try {
        const findUser = await prisma.user.findUnique({
            where:{email: req.body.email}
        
        })
        if(!findUser){
            const {name, lastName, email, password} = req.body
            const hashesdPassword = await bcrypt.hash(password, 10)
            try {
                const user = await prisma.user.create({
                    data: {
                        name,
                        lastName,
                        email,
                        password : hashesdPassword
                    }
                })
                res.json(user)
                console.log("usuario creado exitosamente", user)
                
            } catch (error) {
                console.log(error)
                
            }
           
        }else{
            return res.status(400).json({ message: "User already exist"})
        }
        
    } catch (error) {
        res.status(500).json(error)
    }

};

const signIn = async(req: Request, res: Response)=>{
    const {password} = req.body
    try {
        const user = await prisma.user.findUnique({
            where:{email: req.body.email}
        })
        if(!user){
            console.log("Usuario no encontrado")
            return res.json({messagge: "user not found"})
        }
        const isValidPwd = await bcrypt.compare(password, user.password)
        if(!isValidPwd){
            return res.json({messagge: "Email or password invalid"})

        }
        const token = jwt.sign({id: user.id}, 'my-secret',{expiresIn: '1h'} )
        return res.status(200).json({token})
    } catch (error) {
        
    }

}

export {
    signUp,
    signIn
}