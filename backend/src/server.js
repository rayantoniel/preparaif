import express from "express";
import cors from "cors";
import courseRoutes from "./routes/coursesRoutes.js"; 
import editalRoutes from "./routes/editaisRoutes.js";
import examRoutes from "./routes/examsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/curso", courseRoutes);
app.use("/api/edital", editalRoutes);
app.use("/api/exame", examRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
