const editais = [
  {
    id: 1,
    title: "EDITAL 01/2025",
    description:
      "IFAL abre processo seletivo para ingresso nos cursos Técnicos Integrados ao Ensino Médio",
    time: "Processo Seletivo · 4min de leitura",
  },
];

export default function EditaisList() {
  return (
    <section className="editais">
      <h2>Editais Anteriores</h2>

      <div className="editais-grid">
        {editais.map((edital) => (
          <EditalCard key={edital.id} edital={edital} />
        ))}
      </div>
    </section>
  );
}
