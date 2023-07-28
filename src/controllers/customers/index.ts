import { PrismaClient } from "@prisma/client";
import {Request, Response } from "express";

const prisma = new PrismaClient()

const createMethod =async (req: Request, res: Response):Promise<void> => {
    
    try {
        const customer = await prisma.customers.create({
            data: req.body
        })
        res.json( customer), console.log("Cliente creado existosamente",  customer)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const updateMethod =async (req: Request, res: Response):Promise<void> => {
    const {id} = req.params
    try {
        const  customer = await prisma.customers.update({
            where:{id:id},
            data: req.body
        })
        res.json( customer), console.log("Cliente actualizado existosamente", customer)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const findMethodAll =async (req: Request, res: Response) => {
    
    try {
        const customer = await prisma.customers.findMany()
        console.log(customer)
        res.json(customer)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};

const findMethodById =async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const customer = await prisma.customers.findUnique({
            where: {id:id}
        })
        console.log(customer)
        res.json(customer)
    } catch (error) {
        res.status(500).json(error), console.log(error)
        
    }
    
};
const deleteMethod =async (req: Request, res: Response) => {
    console.log(typeof(req.body.id))
    const {id} = req.body
    console.log(id)
    try {
        const customer = await prisma.customers.delete({
            where: {id:id}
        })
        console.log("Cliente eliminado exitosamente", customer)
        res.json(customer)
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