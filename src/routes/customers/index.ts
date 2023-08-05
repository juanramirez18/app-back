import express  from "express";
import { createMethod, findMethodAll, findMethodById, updateMethod, deleteMethod} from "../../controllers/customers";
import middleware from "../../middleware/auth"
const router = express.Router();

router.post("/", [middleware, createMethod])
router.get("/", [middleware, findMethodAll])
router.get("/:id", [middleware, findMethodById])
router.put("/:id", [middleware, updateMethod])
router.delete("/", [middleware, deleteMethod])

export default router