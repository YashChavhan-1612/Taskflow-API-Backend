import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import taskRouter from "./src/routes/taskRoutes.js";
import { securityHeaders } from "./src/middleware/security.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(securityHeaders);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tasks", taskRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});