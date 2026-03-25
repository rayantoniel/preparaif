import { courses } from "../services/courses";
import CourseCard from "./CourseCard";
import "./CourseCard.css";

export default function CoursesList() {
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