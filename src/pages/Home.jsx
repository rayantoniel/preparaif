import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CoursesList from "../components/CoursesList";
import EditaisList from "../components/EditaisList";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CoursesList />
      <EditaisList />
    </div>
  );
}
