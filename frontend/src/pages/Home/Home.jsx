import { useState } from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { CoursesList } from "../../components/Course";
import { EditaisList } from "../../components/Edital";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Link
        to="/admin"
        style={{ textDecoration: "none", color: "#0d8843", fontWeight: "semi-bold", fontSize: "0.8rem", justifyContent: "flex-end", display: "flex", marginTop: "10px" }}
      >
        Entrar como Administrador
      </Link>
      <HeaderHome searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CoursesList searchTerm={searchTerm} />
      <EditaisList />
    </div>
  );
}