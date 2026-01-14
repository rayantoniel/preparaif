import express from "express";
import cors from "cors";
import coursesRoutes from "./routes/courses.routes.js";
import editaisRoutes from "./routes/editais.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/courses", coursesRoutes);
app.use("/editais", editaisRoutes);

app.listen(3333, () => {
  console.log("Funcionando na porta 3333");
});
