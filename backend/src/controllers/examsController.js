import { findAllCourses, createCourseService } from "../services/coursesService.js";

export async function getExams(req, res) {
  const exams = await findAllExams();
  res.json(exams);
}

export async function createExam(req, res) {
  const { title, description } = req.body;
  const exam = await createExamService(title, description);
  res.json(exam);
}