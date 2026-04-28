import { findAllCourses, createCourseService } from "../services/coursesService.js";

export async function getCourses(req, res) {
  const courses = await findAllCourses();
  res.json(courses);
}

export async function createCourse(req, res) {
  const { title, description } = req.body;
  const course = await createCourseService(title, description);
  res.json(course);
}