import { findAllCourses, createCourseService } from "../services/coursesService.js";

export async function getCourses(req, res) {
  const courses = await findAllCourses();
  res.json(courses);
}

export async function createCourse(req, res) {
  const course = await createCourseService(req.body);
  res.json(course);
}