import { useNavigate } from 'react-router-dom'; 
import './CourseCard.css';

export default function CourseCard({ institute, course }) {
    
    const navigate = useNavigate();

    const irParaCurso = () => {
        navigate('/curso');
    };

    return (
        <div className="course-container">
            <div className="institute">
                <img className="img-institute" src={institute.logo} alt={institute.name} />
                <h2 className="institute-title">{institute.name}</h2>
            </div>
            
            <h2 className="course-title">{course.name}</h2>
            
            <div className="info-button">
                <span className="course-info">Informações públicas no site da instituição</span>
                
                <button className="course-button" onClick={irParaCurso}>
                    Ver curso
                </button>
            </div>
        </div>
    );
}