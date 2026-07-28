import { findAllExams, findExamById, createExamService } from "../services/examsService.js";

export async function getExams(req, res) {
  const exams = await findAllExams();
  res.json(exams);
}

export async function getExamById(req, res) {
  const exam = await findExamById(req.params.id);
  res.json(exam);
}

export async function createExam(req, res) {
  const { title, questions } = req.body;
  const exam = await createExamService(title, questions);
  res.json(exam);
}