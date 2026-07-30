import prisma from "../config/prisma.js";

export async function findAllEditais() {
  return prisma.edital.findMany();
}

export async function createEditaisService(title, content, time) {
  return prisma.edital.create({ 
    data: { 
      title: data.title, 
      content: data.content, 
      time: data.time,
      courseId: data.courseId,
      course: data.course ?
        { connect: { id: data.courseId } }
      : undefined
    } 
  });
}