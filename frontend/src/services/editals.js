export async function fetchEditals() {
  const response = await fetch("api/edital");
  if (!response.ok) throw new Error("Erro ao buscar editais");

  const data = await response.json();

  return data?.map((e) => ({
    id: e.id,
    title: e.title,
    description: e.description,
    time: e.time,
    content: e.content,
    instituteName: e.instituteName,
    instituteLogo: e.instituteLogo,
  }));
}

export async function fetchEditalById(id) {
  const response = await fetch(`/api/edital/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar o edital");
  }

  const data = await response.json();
  return data;
}