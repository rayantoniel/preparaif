import express from "express";
import cors from "cors";

import coursesRoutes from "./routes/coursesRoutes.js";
import editaisRoutes from "./routes/editaisRoutes.js";
import examsRoutes from "./routes/examsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/courses", coursesRoutes);
app.use("/editais", editaisRoutes);
app.use("/exams", examsRoutes);

export default app;