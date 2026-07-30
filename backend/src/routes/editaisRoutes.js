import { Router } from "express";
import { getEditais, createEditais, getEditalById } from "../controllers/editaisController.js";

const router = Router();

router.get("/", getEditais);
router.get("/:id", getEditalById);
router.post("/", createEditais);

export default router;