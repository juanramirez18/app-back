import express  from "express";
import { createMethod, findMethodAll, findMethodById, updateMethod, deleteMethod} from "../../controllers/customers";

const router = express.Router();

router.post("/", createMethod)
router.get("/", findMethodAll)
router.get("/:id", findMethodById)
router.put("/:id", updateMethod)
router.delete("/", deleteMethod)

export default router