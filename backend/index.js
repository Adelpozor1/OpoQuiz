import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRegisterRouter from "./api/base_de_datos/UserRegister.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ ok: true, msg: "pong" });
});

// Montar rutas de registro
app.use("/api/base_de_datos", userRegisterRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Backend escuchando en puerto:", PORT);
});


   




