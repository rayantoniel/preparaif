export default function EditalCard({ edital }) {
  return (
    <div className="edital-card">
      <h2>{edital.title}</h2>
      <p>{edital.description}</p>
      <small>{edital.time}</small>
    </div>
  );
}
