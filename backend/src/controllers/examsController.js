import { findAllExams, createExamService } from "../services/examsService.js";

export async function getExams(req, res) {
  const exams = await findAllExams();
  res.json(exams);
}

export async function createExam(req, res) {
  const { name, date } = req.body;
  const exam = await createExamService(name, date);
  res.json(exam);
}