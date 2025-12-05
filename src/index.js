import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/songs.routes.js";
import favoritesRoutes from "./routes/favorites.routes.js";



const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/songs", songRoutes);
app.use("/api", favoritesRoutes);

app.get("/", (req, res) => {
  res.send("API de Spotify clon funcionando ✅");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
