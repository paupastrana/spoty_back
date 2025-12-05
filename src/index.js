// import express from "express";
// import cors from "cors";
// import authRoutes from "./routes/auth.routes.js";
// import songRoutes from "./routes/songs.routes.js";
// import favoritesRoutes from "./routes/favorites.routes.js";



// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/songs", songRoutes);
// app.use("/api", favoritesRoutes);

// app.get("/", (req, res) => {
//   res.send("API de Spotify clon funcionando ✅");
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en puerto ${PORT}`);
// });

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/songs.routes.js";
import favoritesRoutes from "./routes/favorites.routes.js";

// 1. DEFINE LA URL DE TU FRONTEND DE AMPLIFY
const AMPLIFY_FRONTEND_URL = 'https://main.d122hi02mt987d.amplifyapp.com'; 

const ALLOWED_ORIGINS = [
  'https://main.d122hi02mt987d.amplifyapp.com', // Producción (Amplify)
  'http://localhost:3001', // Desarrollo local (el puerto que estás usando)
  // Agrega otros puertos si usas Vue, Angular, etc. (ej: 'http://localhost:8080')
]; 

const app = express();
// 2. CONFIGURA CORS PARA ACEPTAR LA LISTA
app.use(cors({
  origin: ALLOWED_ORIGINS 
}));





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