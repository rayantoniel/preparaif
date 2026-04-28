import { findAllCourses, createCourseService } from "../services/coursesService.js";

export async function getEditais(req, res) {
  const editais = await findAllEditais();
  res.json(editais);
}

export async function createEditais(req, res) {
  const { title, description } = req.body;
  const editais = await createEditaisService(title, description);
  res.json(editais);
}