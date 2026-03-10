import './CourseDetails.css';
import HeaderCourse from '../components/HeaderCourse';
import { courses } from '../services/courses';

function CourseDetails() {
  const cursoAtual = courses[0];
  return (
    <div className="course-details-page">
      <HeaderCourse title={cursoAtual.course.name} image={cursoAtual.course.image} />

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
              <li>1. Sisu 2025</li>
              <li>1. Sisu 2024</li>
              <li>1. Sisu 2023</li>
              <li>1. Sisu 2022</li>
              <li>1. Sisu 2021</li>
            </ul>
          </div>
        </aside>

        <div className="details-description">
          <div className="course-description-text">
            {cursoAtual.course.description}
          </div>

          <div className="course-specs">
            <p><strong>Modalidade:</strong> {cursoAtual.course.specs.modalidade}</p>
            <p><strong>Duração:</strong> {cursoAtual.course.specs.duracao}</p>
            <p><strong>Título concedido:</strong> {cursoAtual.course.specs.titulo}</p>
            <p><strong>Turno:</strong> {cursoAtual.course.specs.turno}</p>
            <p><strong>Campus:</strong> {cursoAtual.course.specs.campus}</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default CourseDetails;