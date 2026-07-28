import prisma from "../config/prisma.js";

function parseQuestions(exam) {
  return {
    ...exam,
    questions: exam.questions.map(q => ({ ...q, options: JSON.parse(q.options) }))
  };
}

export async function findAllExams() {
  const exams = await prisma.exam.findMany({ include: { questions: true } });
  return exams.map(parseQuestions);
}

export async function findExamById(id) {
  const exam = await prisma.exam.findUnique({
    where: { id: Number(id) },
    include: { questions: true }
  });
  return exam ? parseQuestions(exam) : null;
}

export async function createExamService(title, questions) {
  const exam = await prisma.exam.create({
    data: {
      title,
      questions: {
        create: questions.map(q => ({
          text: q.text,
          options: JSON.stringify(q.options),
          correctAnswerIndex: q.correctAnswerIndex
        }))
      }
    },
    include: { questions: true }
  });
  return parseQuestions(exam);
}