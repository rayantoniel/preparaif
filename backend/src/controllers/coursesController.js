import {
  createCourseService,
  getAllCoursesService,
} from "../services/coursesService.js";

export async function createCourse(req, res) {
  try {
    const courseData = req.body;
    const newCourse = await createCourseService(courseData);
    return res.status(201).json(newCourse);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao criar curso" });
  }
}

export async function getCourses(req, res) {
  try {
    const courses = await getAllCoursesService();
    return res.json(courses);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar cursos" });
  }
}
