import prisma from "../config/prisma.js";

export async function findAllExams() {
  return prisma.exam.findMany();
}

export async function createExamService(title, description) {
  return prisma.exam.create({
    data: { title, description }
  });
}