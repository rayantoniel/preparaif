import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, CourseDetails, EditalDetails, LastExams, Exam } from "./pages";
import "./App.css";
import { AdminPage } from "./pages/Admin/AdminPage";

function App() {
	return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curso/:id" element={<CourseDetails />} />
          <Route path="/edital/:id" element={<EditalDetails />} />
          <Route path="/provas" element={<LastExams />} />
          <Route path="/exame" element={<Exam />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
