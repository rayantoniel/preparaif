import { useState } from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { CoursesList } from "../../components/Course";
import { EditaisList } from "../../components/Edital";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <HeaderHome searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CoursesList searchTerm={searchTerm} />
      <EditaisList />
    </div>
  );
}