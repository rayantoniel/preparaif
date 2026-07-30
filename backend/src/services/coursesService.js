import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllCoursesService() {
  return await prisma.course.findMany({
    include: { editals: true },
  });
}

export async function createCourseService(data) {
  return await prisma.course.create({
    data,
  });
}
