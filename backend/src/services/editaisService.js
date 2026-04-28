import prisma from "../config/prisma.js";

export async function findAllEditais() {
  return prisma.editais.findMany();
}

export async function createEditaisService(title, description) {
  return prisma.editais.create({
    data: { title, description }
  });
}