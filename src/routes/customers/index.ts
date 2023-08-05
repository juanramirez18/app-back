import express  from "express";
import { createMethod, findMethodAll, findMethodById, updateMethod, deleteMethod} from "../../controllers/customers";
import middleware from "../../middleware/auth"
const router = express.Router();

router.post("/", createMethod)
router.get("/", [middleware, findMethodAll])
router.get("/:id", findMethodById)
router.put("/:id", updateMethod)
router.delete("/", deleteMethod)

export default router