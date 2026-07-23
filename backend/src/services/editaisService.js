import prisma from "../config/prisma.js";

export async function findAllEditais() {
  return prisma.edital.findMany();
}

export async function createEditaisService(title, content) {
  return prisma.edital.create({
    data: { title, content }
  });
}