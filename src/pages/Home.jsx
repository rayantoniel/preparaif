import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CoursesList from "../components/CouseList";
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
