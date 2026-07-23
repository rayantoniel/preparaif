import { findAllEditais, createEditaisService } from "../services/editaisService.js";

export async function getEditais(req, res) {
  const editais = await findAllEditais();
  res.json(editais);
}

export async function createEditais(req, res) {
  const { title, content } = req.body;
  const editais = await createEditaisService(title, content);
  res.json(editais);
}