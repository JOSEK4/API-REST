import { Request, Response, Router } from "express";

const router = Router();
/**
 * http://localhost:3000/api/item [GET]
 */

router.get("/", (req: Request, res: Response) => {
    res.send({ data: "aqui van los modelos" });

});

export { router };