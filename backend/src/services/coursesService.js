import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAllCourses() {
  return await prisma.course.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

// coursesController.js no BACKEND:
export async function findCourseById(id) {
  return await prisma.course.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      editals: true,
    },
  });
}

export async function createCourseService(data) {
  return await prisma.course.create({
    data: {
      title: data.title,
      description: data.description,
      instituteName: data.instituteName,
      instituteLogo: data.instituteLogo,
      image: data.image,
      readTime: data.readTime,
      modality: data.modality,
      duration: data.duration,
      degree: data.degree,
      shift: data.shift,
      campus: data.campus,
    },
  });
}
