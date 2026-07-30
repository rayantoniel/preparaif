import prisma from "../config/prisma.js";

export async function findAllEditais() {
  return prisma.edital.findMany({
    include: {
      course: true,
    },
  });
}

export async function findEditalByIdService(id) {
  return prisma.edital.findUnique({
    where: { id: Number(id) },
  });
}

export async function createEditaisService(editalData) {
  const {
    title,
    description,
    content,
    time,
    instituteName,
    instituteLogo,
    courseId,
  } = editalData;

  let courseIdFound = null;

  if (courseId) {
    if (!isNaN(courseId)) {
      courseIdFound = Number(courseId);
    } else {
      const course = await prisma.course.findFirst({
        where: {
          title: {
            contains: String(courseId).trim(),
            mode: "insensitive", 
          },
        },
      });
      if (course) courseIdFound = course.id;
    }
  }

  return prisma.edital.create({
    data: {
      title,
      description: description || "Processo Seletivo",
      content,
      time: time || "Processo Seletivo · 4min de leitura",
      instituteName: instituteName || "Instituto Federal de Alagoas",
      instituteLogo:
        instituteLogo ||
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
      courseId: courseIdFound,
    },
  });
}
