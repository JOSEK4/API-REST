import { Request, Response, Router } from "express";
import { getItem, getItems } from "../controllers/item";

const router = Router();
/**
 * http://localhost:3000/api/item [GET]
 */

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/:id",getItem);
router.put("/:id",getItem);
router.delete("/:id",getItem);



export { router };