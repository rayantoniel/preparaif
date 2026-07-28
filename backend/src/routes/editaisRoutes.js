import { Router } from "express";
import { getEditais, createEditais } from "../controllers/editaisController.js";

const router = Router();

router.get("/", getEditais);
router.post("/", createEditais);

export default router;