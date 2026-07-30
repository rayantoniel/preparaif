import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const editais = await prisma.edital.findMany();
    res.json(editais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar editais." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const edital = await prisma.edital.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!edital) {
      return res.status(404).json({ error: "Edital não encontrado." });
    }

    res.status(200).json(edital);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar o edital." });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      time,
      content,
      instituteName,
      instituteLogo,
      courseId,
    } = req.body;

    const newEdital = await prisma.edital.create({
      data: {
        title,
        description,
        time,
        content,
        instituteName,
        instituteLogo,
        courseId: courseId ? Number(courseId) : null,
      },
    });

    res.status(201).json(newEdital);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao criar edital." });
  }
});

export default router;
