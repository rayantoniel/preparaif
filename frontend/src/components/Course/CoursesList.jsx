import { useState, useEffect, useMemo } from "react";
import { fetchCourses } from "../../services/courses";
import CourseCard from "./CourseCard";
import "./CourseStyle.css";

const PAGE_SIZE = 6;

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function CoursesList({ searchTerm = "" }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shiftFilter, setShiftFilter] = useState("");
  const [campusFilter, setCampusFilter] = useState("");
  const [degreeFilter, setDegreeFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const shifts = useMemo(
    () => [...new Set(courses.map((c) => c.shift).filter(Boolean))],
    [courses]
  );
  const campuses = useMemo(
    () => [...new Set(courses.map((c) => c.campus).filter(Boolean))],
    [courses]
  );
  const degrees = useMemo(
    () => [...new Set(courses.map((c) => c.degree).filter(Boolean))],
    [courses]
  );

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch = normalize(c.title).includes(normalize(searchTerm));
      const matchesShift = !shiftFilter || c.shift === shiftFilter;
      const matchesCampus = !campusFilter || c.campus === campusFilter;
      const matchesDegree = !degreeFilter || c.degree === degreeFilter;
      return matchesSearch && matchesShift && matchesCampus && matchesDegree;
    });
  }, [courses, searchTerm, shiftFilter, campusFilter, degreeFilter]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCourses.length;
  
  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setVisibleCount(PAGE_SIZE);
  };

  if (loading) return <p>Carregando cursos...</p>;

  return (
    <>
      <div className="courses-filters">
        <select value={degreeFilter} onChange={handleFilterChange(setDegreeFilter)}>
          <option value="">Todos os tipos</option>
          {degrees.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select value={shiftFilter} onChange={handleFilterChange(setShiftFilter)}>
          <option value="">Todos os turnos</option>
          {shifts.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select value={campusFilter} onChange={handleFilterChange(setCampusFilter)}>
          <option value="">Todos os campi</option>
          {campuses.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="courses-container">
        {filteredCourses.length === 0 && (
          <p className="no-results">Nenhum curso foi encontrado.</p>
        )}
        {visibleCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>

      {hasMore && (
        <div className="see-more-container">
          <button
            type="button"
            className="see-more-link"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            Ver mais...
          </button>
        </div>
      )}
    </>
  );
}