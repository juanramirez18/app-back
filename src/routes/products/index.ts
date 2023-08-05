import express  from "express";
import { createMethod, findMethodAll, findMethodById, updateMethod, deleteMethod} from "../../controllers/products";
import middleware from "../../middleware/auth"
const router = express.Router();

router.post("/",[middleware,createMethod] )
router.get("/", [middleware, findMethodAll])
router.get("/:id",[middleware, findMethodAll] )
router.put("/:id", [middleware, updateMethod])
router.delete("/:id", [middleware, deleteMethod])

export default router