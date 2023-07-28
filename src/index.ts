import express from "express";
import mongoose from "mongoose";
import router from "./routes";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


let connStr = process.env.DATABASE_URL ?? "";
mongoose.connect(connStr).then(()=>console.log("se ha conectado exitosamente a la BD")).catch((error)=>console.log("No se pudo conectar a la BD",error))
const app = express();
const port = 3000
app.use(express.json());

app.use("/api", router)
app.listen(port, ()=> {
  console.log("Ejecutandose en el puerto 3000")
})
