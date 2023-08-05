import { PrismaClient } from "@prisma/client";
import {Request, Response } from "express";

const prisma = new PrismaClient()

const createMethod =async (req: Request, res: Response):Promise<void> => {
    
    try {
        const product = await prisma.products.create({
            data: req.body
        })
        res.json( product), console.log("Producto creado existosamente",  product)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const updateMethod =async (req: Request, res: Response):Promise<void> => {
    const {id} = req.params
    try {
        const  product = await prisma.products.update({
            where:{id:id},
            data: req.body
        })
        res.json( {messagge:" update product succes"}), console.log("Producto actualizado existosamente",  product)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const findMethodAll =async (req: Request, res: Response) => {
    
    try {
        const product = await prisma.products.findMany()
        console.log(product)
        res.json(product)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const findMethodById =async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const product = await prisma.products.findUnique({
            where: {id:id}
        })
        console.log(product)
        res.status(200)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};
const deleteMethod =async (req: Request, res: Response) => {
    console.log(typeof(req.body.id))
    const {id} = req.params
    console.log(id)
    try {
        const product = await prisma.products.delete({
            where: {id:id}
        })
        console.log("Producto eliminado exitosamente", product)
        return res.status(200).json({messagge:"Usuario eliminado exitosamente"})
    } catch (error) {
        return res.status(500).json(error), console.log(error)
        
    }
    
}

export {
    createMethod,
    findMethodAll,
    findMethodById,
    updateMethod,
    deleteMethod
}