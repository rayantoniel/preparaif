import { useState, useEffect } from "react";
import { fetchCourses } from "../services/courses";
import CourseCard from "./CourseCard";
import "./CourseCard.css";

export default function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando cursos...</p>;

  return (
    <>
      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            institute={course.institute}
            course={course.course}
          />
        ))}
      </div>

      <div className="see-more-container">
        <a href="#" className="see-more-link">Ver mais...</a>
      </div>
    </>
  );
}