import { useState, useEffect } from "react";
import { fetchEditals } from "../../services/editals";
import Edital from "./EditalCard";
import "./EditalStyle.css";

export default function EditaisList() {
  const [editais, setEditais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEditals()
      .then(setEditais)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="editais">
      <div className="editais-header">
        <h2 className="title">Editais Anteriores</h2>
      </div>

      <div className="editais-carousel">
        {loading && <p className="results">Carregando editais...</p>}
        {!loading && editais.length === 0 && (
          <p className="results">Nenhum edital foi encontrado.</p>
        )}
        {!loading && editais.length > 0 && (
          <div className="editais-list">
            {editais.map((edital) => (
              <div className="edital-item" key={edital.id}>
                <Edital edital={edital} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}