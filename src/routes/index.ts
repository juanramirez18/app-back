import express from "express";
import routerUser from "../routes/users";
import routerProduct from "./products";
import routerCustomers from "./customers";
import routerAuth from "../routes/auth"


const router = express.Router();

router.use("/usuarios", routerUser)
router.use("/productos", routerProduct)
router.use("/clientes", routerCustomers )
router.use("/auth",routerAuth )

export default router;
