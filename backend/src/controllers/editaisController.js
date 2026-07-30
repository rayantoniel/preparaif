import {
  findAllEditais,
  findEditalByIdService,
  createEditaisService,
} from "../services/editaisService.js";

export async function getEditais(req, res) {
  try {
    const editais = await findAllEditais();
    res.json(editais);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar editais" });
  }
}

export async function getEditalById(req, res) {
  try {
    const { id } = req.params;

    const edital = await findEditalByIdService(id);

    if (!edital) {
      return res.status(404).json({ message: "Edital não encontrado" });
    }

    res.json(edital);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o edital" });
  }
}

export async function createEditais(req, res) {
  try {
    const newEdital = await createEditaisService(req.body);
    res.status(201).json(newEdital);
  } catch (error) {
    console.error("Erro ao criar edital:", error);
    res
      .status(400)
      .json({ error: "Erro ao cadastrar o edital. Verifique os dados." });
  }
}
