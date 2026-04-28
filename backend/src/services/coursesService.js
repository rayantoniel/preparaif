import prisma from "../config/prisma.js";

export async function findAllCourses() {
  return prisma.course.findMany();
}

export async function createCourseService(title, description) {
  return prisma.course.create({
    data: { title, description }
  });
}