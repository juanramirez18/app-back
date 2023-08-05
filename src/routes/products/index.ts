import express  from "express";
import { createMethod, findMethodAll, findMethodById, updateMethod, deleteMethod} from "../../controllers/products";

const router = express.Router();

router.post("/", createMethod)
router.get("/", findMethodAll)
router.get("/:id", findMethodById)
router.put("/:id", updateMethod)
router.delete("/:id", deleteMethod)

export default router