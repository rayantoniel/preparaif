import { findAllEditais, createEditaisService } from "../services/editaisService.js";

export async function getEditais(req, res) {
  const editais = await findAllEditais();
  res.json(editais);
}

export async function createEditais(req, res) {
  const { title, content, time } = req.body;
  const editais = await createEditaisService(title, content, time);
  res.json(editais);
}

export async function getEditalById(req, res) {
  const { id } = req.params;
  const editais = await findAllEditais();
  const edital = editais.find((edital) => edital.id === parseInt(id));

  if (!edital) {
    return res.status(404).json({ message: "Edital não encontrado" });
  }

  res.json(edital);
}