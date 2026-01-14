import { courses } from "../services/courses";
import CourseCard from "./CourseCard";

export default function CoursesList() {
  return (
    <section className="courses-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
}
