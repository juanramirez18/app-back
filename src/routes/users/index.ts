import express  from "express";
import { createMethod, findMethodAll, findMethodById, updateMethod, deleteMethod} from "../../controllers/users";
import Middleware from "../../middleware/auth"
const router = express.Router();

router.post("/", [Middleware,createMethod])
router.get("/", [Middleware,findMethodAll])
router.get("/:id", findMethodById)
router.put("/:id", updateMethod)
router.delete("/", deleteMethod)

export default router