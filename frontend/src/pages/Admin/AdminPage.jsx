import React, { useEffect, useState } from "react";
import "./AdminPage.css";

export function AdminPage() {
  const [activeTab, setActiveTab] = useState("courses");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [coursesList, setCoursesList] = useState([]);

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    instituteName: "",
    instituteLogo: "",
    image: "",
    readTime: "",
    modality: "",
    duration: "",
    degree: "",
    shift: "",
    campus: "",
  });

  const [editalForm, setEditalForm] = useState({
    title: "",
    description: "",
    time: "",
    content: "",
    instituteName: "",
    instituteLogo: "",
    courseId: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCoursesList(data);
        }
      })
      .catch((err) => console.error("Erro ao carregar lista de cursos:", err));
  }, [activeTab]);

  const handleCourseChange = (e) => {
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  const handleEditalChange = (e) => {
    setEditalForm({ ...editalForm, [e.target.name]: e.target.value });
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseForm),
      });

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Curso cadastrado com sucesso no banco de dados!",
        });
        setCourseForm({
          ...courseForm,
          title: "",
          description: "",
          image: "",
        });
      } else {
        throw new Error("Erro ao salvar o curso");
      }
    } catch (error) {
      console.error("Course creation error:", error);
      setMessage({
        type: "error",
        text: "Não foi possível cadastrar o curso. Verifique a API.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:3000/api/editals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...editalForm,
          courseId: editalForm.courseId ? Number(editalForm.courseId) : null,
        }),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Edital publicado com sucesso!" });
        setEditalForm({
          ...editalForm,
          title: "",
          description: "",
          content: "",
          courseId: "",
        });
      } else {
        throw new Error("Erro ao salvar edital");
      }
    } catch (error) {
      console.error("Edital creation error:", error);
      setMessage({ type: "error", text: "Erro ao cadastrar edital." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <span className="admin-badge">Painel de Controle</span>
        <h1>Gerenciador do Prepara IF</h1>
        <p>
          Cadastre novos cursos e editais diretamente no banco de dados em
          nuvem.
        </p>
      </header>

      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === "courses" ? "active" : ""}`}
          onClick={() => setActiveTab("courses")}
        >
          ➕ Novo Curso
        </button>
        <button
          className={`tab-btn ${activeTab === "editals" ? "active" : ""}`}
          onClick={() => setActiveTab("editals")}
        >
          📄 Novo Edital
        </button>
      </div>

      {message.text && (
        <div className={`alert-box ${message.type}`}>{message.text}</div>
      )}

      {activeTab === "courses" && (
        <form onSubmit={handleCourseSubmit} className="admin-card-form">
          <h2>Cadastrar Curso</h2>

          <div className="form-group">
            <label>Título do Curso *</label>
            <input
              type="text"
              name="title"
              placeholder="Ex: Bacharelado em Sistemas de Informação"
              value={courseForm.title}
              onChange={handleCourseChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Descrição do Curso *</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Breve resumo sobre a formação e mercado de trabalho..."
              value={courseForm.description}
              onChange={handleCourseChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Campus *</label>
              <input
                type="text"
                name="campus"
                placeholder="Ex: Arapiraca / Maceió"
                value={courseForm.campus}
                onChange={handleCourseChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Turno *</label>
              <select
                name="shift"
                value={courseForm.shift}
                onChange={handleCourseChange}
                required
              >
                <option value="">Selecione o turno</option>
                <option value="Noturno">Noturno</option>
                <option value="Matutino">Matutino</option>
                <option value="Vespertino">Vespertino</option>
                <option value="Integral">Integral</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Modalidade *</label>
              <select
                name="modality"
                value={courseForm.modality}
                onChange={handleCourseChange}
                required
              >
                <option value="">Selecione a modalidade</option>
                <option value="Presencial">Presencial</option>
                <option value="EAD">EAD</option>
                <option value="Híbrido">Híbrido</option>
              </select>
            </div>
            <div className="form-group">
              <label>Duração *</label>
              <input
                type="text"
                name="duration"
                placeholder="Ex: 4 anos"
                value={courseForm.duration}
                onChange={handleCourseChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>URL da Imagem de Capa (Opcional)</label>
            <input
              type="url"
              name="image"
              placeholder="https://picsum.photos/800/400"
              value={courseForm.image}
              onChange={handleCourseChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Salvando no Banco..." : "Cadastrar Curso"}
          </button>
        </form>
      )}

      {activeTab === "editals" && (
        <form onSubmit={handleEditalSubmit} className="admin-card-form">
          <h2>Publicar Novo Edital</h2>

          <div className="form-group">
            <label>Título do Edital *</label>
            <input
              type="text"
              name="title"
              placeholder="Ex: EDITAL 01/2025"
              value={editalForm.title}
              onChange={handleEditalChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Resumo / Descrição *</label>
            <input
              type="text"
              name="description"
              placeholder="Ex: Processo Seletivo para ingresso nos cursos de graduação..."
              value={editalForm.description}
              onChange={handleEditalChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Conteúdo Completo (HTML ou Texto)</label>
            <textarea
              name="content"
              rows="5"
              placeholder="<p>Texto completo do edital...</p>"
              value={editalForm.content}
              onChange={handleEditalChange}
            />
          </div>

          <div className="form-group">
            <label>Vincular a um Curso (Opcional)</label>
            <select
              name="courseId"
              value={editalForm.courseId}
              onChange={handleEditalChange}
            >
              <option value="">
                -- Selecione um Curso (Geral / Sem vínculo) --
              </option>
              {coursesList.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title} ({course.campus})
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Publicando..." : "Publicar Edital"}
          </button>
        </form>
      )}
    </div>
  );
}
