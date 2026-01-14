export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <small>{course.campus}</small>

      <h3>{course.name}</h3>

      <p>Informações públicas no site da instituição</p>

      <button>Ver curso</button>
    </div>
  );
}
