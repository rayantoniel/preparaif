import {
  findAllCourses,
  findCourseById,
  createCourseService,
} from "../services/coursesService.js";

export async function getCourses(req, res) {
  const courses = await findAllCourses();
  res.json(courses);
}

export async function createCourse(req, res) {
  const course = await createCourseService(req.body);
  res.json(course);
}

export async function getCourseById(req, res) {
  const { id } = req.params;
  const course = await findCourseById(id);

  if (!course) {
    return res.status(404).json({ message: "Curso não encontrado" });
  }

  return res.json(course);
}
