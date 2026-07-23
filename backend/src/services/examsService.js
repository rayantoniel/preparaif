import prisma from "../config/prisma.js";

export async function findAllExams() {
  return prisma.exam.findMany();
}

export async function createExamService(name, date) {
  return prisma.exam.create({
    data: { name, date: new Date(date) }
  });
}