import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: { editals: true },
    });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar cursos" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await prisma.course.findUnique({
      where: { id: Number(id) },
      include: { editals: true },
    });

    if (!course) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar curso" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      instituteName,
      instituteLogo,
      image,
      readTime,
      modality,
      duration,
      degree,
      shift,
      campus,
    } = req.body;

    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        instituteName,
        instituteLogo,
        image,
        readTime,
        modality,
        duration,
        degree,
        shift,
        campus,
      },
    });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ error: "Erro ao criar curso. Verifique os campos." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.course.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Curso removido com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao deletar curso" });
  }
});

export default router;
