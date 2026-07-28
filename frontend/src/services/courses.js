const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function fetchCourses() {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) throw new Error("Erro ao buscar cursos");
  const data = await response.json();

  return data.map((c) => ({
    id: c.id,
    institute: {
      name: c.instituteName,
      logo: c.instituteLogo
    },
    course: {
      name: c.title,
      readTime: c.readTime,
      image: c.image,
      description: c.description,
      specs: {
        modalidade: c.modalidade,
        duracao: c.duracao,
        titulo: c.titulo,
        turno: c.turno,
        campus: c.campus
      },
      edicts: c.edicts
    }
  }));
}