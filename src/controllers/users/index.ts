import { PrismaClient } from "@prisma/client";
import {Request, Response } from "express";

const prisma = new PrismaClient()

const createMethod =async (req: Request, res: Response):Promise<void> => {
    
    try {
        const user = await prisma.user.create({
            data: req.body
        })
        res.json(user), console.log("Usuario creado existosamente", user)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const updateMethod =async (req: Request, res: Response):Promise<void> => {
    const {id} = req.params
    try {
        const user = await prisma.user.update({
            where:{id:id},
            data: req.body
        })
        res.json(user), console.log("Usuario actualizado existosamente", user)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const findMethodAll =async (req: Request, res: Response) => {
    
    try {
        const user = await prisma.user.findMany()
        console.log(user)
        res.json(user)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const findMethodById =async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const user = await prisma.user.findUnique({
            where: {id:id}
        })
        console.log(user)
        res.json(user)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};
const deleteMethod =async (req: Request, res: Response) => {
    console.log(typeof(req.body.id))
    const {id} = req.body
    console.log(id)
    try {
        const user = await prisma.user.delete({
            where: {id:id}
        })
        console.log("Usuario eliminado exitosamente", user)
        res.json(user)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
}

export {
    createMethod,
    findMethodAll,
    findMethodById,
    updateMethod,
    deleteMethod
}