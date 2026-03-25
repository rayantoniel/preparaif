import { editais } from "../services/edital";
import Edital from "./EditalCard";
import "./EditalCard.css"; 

export default function EditaisList() {
  return (
    <div className="editais">
      <h2 className="title">Editais Anteriores</h2>

      <div className="editais-carousel">
        {editais.map((edital) => (
          <Edital key={edital.id} edital={edital} />
        ))}
      </div>
    </div>
  );
}
