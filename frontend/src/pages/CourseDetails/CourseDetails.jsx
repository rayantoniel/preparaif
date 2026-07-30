import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";
import { HeaderCourse } from "../../components/Course";
import { fetchCourseById } from "../../services/courses";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourseById(id)
      .then((data) => setCourse(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Carregando o curso...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!course) return <p>Curso não encontrado.</p>;

  if (!course) {
    return (
      <div className="course-details-page">
        <p>Curso não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="course-details-page">
      <HeaderCourse title={course.title} image={course.image} />

      <main className="details-body">
        <aside className="details-sidebar">
          <div className="social-share">
            <span className="social-title">Compartilhe nas redes</span>
            <div className="social-icons">
              <div className="icon-circle">X</div>
              <div className="icon-circle">W</div>
              <div className="icon-circle">@</div>
            </div>
          </div>

          <div className="edicts-box">
            <h3 className="edicts-box-title">Editais Anteriores</h3>
            <ul className="edicts-list">
              {!course.editals || course.editals.length === 0
                ? "Nenhum edital encontrado."
                : course.editals.map((e) => <li key={e.id}>{e.title}</li>)}
            </ul>
          </div>
        </aside>

        <div className="details-description">
          <div className="course-description-text">{course.description}</div>

          <div className="course-specs">
            <p>
              <strong>Modalidade:</strong> {course.modality}
            </p>
            <p>
              <strong>Duração:</strong> {course.duration}
            </p>
            <p>
              <strong>Título concedido:</strong> {course.title}
            </p>
            <p>
              <strong>Turno:</strong> {course.shift}
            </p>
            <p>
              <strong>Campus:</strong> {course.campus}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseDetails;
