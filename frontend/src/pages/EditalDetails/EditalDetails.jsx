import { useEffect, useState } from "react";
import "./EditalDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEditalById } from "../../services/editals";

function EditalDetails() {
  const { id } = useParams();
  const [edital, setEdital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEditalById(id)
      .then((data) => setEdital(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading-state">Carregando o edital...</p>;
  if (error) return <p className="error-state">Erro: {error}</p>;
  if (!edital) return <p className="not-found-state">Edital não encontrado.</p>;

  return (
    <div className="edict-page-container">
      <button className="btn-voltar edict-back" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Voltar
      </button>

      <div className="edict-content-split">
        <div className="edict-left-col">
          <span className="source-info">
            Informações extraídas do Portal do Ifal
          </span>

          <h1 className="edict-title">{edital.title}</h1>

          <p className="read-time-info">
            <span className="green-highlight">Publicado em</span> -{" "}
            {edital.time}
          </p>

          <img
            src={
              edital.instituteLogo ||
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
            }
            alt={edital.title}
            className="edict-image"
          />
        </div>

        <div className="edict-right-col">
          <p className="edict-description">{edital.description}</p>

          {edital.content && (
            <div className="edict-body-content">{edital.content}</div>
          )}

          <div className="action-card">
            <div className="action-card-header">
              <div className="icone-instituto"></div>
              <span className="nome-instituto">{edital.instituteName}</span>
            </div>

            <h3 className="action-card-title">Fazer Provas anteriores</h3>

            <div className="action-card-footer">
              <span className="course-info">
                Informações públicas no site da instituição
              </span>
              <button
                className="course-button"
                onClick={() => navigate("/provas")}
              >
                Fazer provas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditalDetails;
