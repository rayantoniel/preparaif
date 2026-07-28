import prisma from "../config/prisma.js";

export async function findAllCourses() {
  const courses = await prisma.course.findMany();
  return courses.map(c => ({ ...c, edicts: JSON.parse(c.edicts) }));
}

export async function createCourseService(data) {
  const course = await prisma.course.create({
    data: { ...data, edicts: JSON.stringify(data.edicts || []) }
  });
  return { ...course, edicts: JSON.parse(course.edicts) };
}