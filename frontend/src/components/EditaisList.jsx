import { editais } from "../services/edital";
import Edital from "./EditalCard";
import "./EditalCard.css";

export default function EditaisList() {
  return (
    <section className="editais">
      <div className="editais-header">
        <h2 className="title">Editais Anteriores</h2>
      </div>

      <div className="editais-carousel">
        {editais.map((edital) => (
          <div className="edital-item" key={edital.id}>
            <Edital edital={edital} />
          </div>
        ))}
      </div>
    </section>
  );
}