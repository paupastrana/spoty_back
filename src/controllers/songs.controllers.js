import pool from "../db/connection.js";

export const getSongs = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, title, artist, album, genre, cover_url, audio_url FROM songs"
    );
    return res.json(rows);
  } catch (error) {
    console.error("Error al obtener canciones:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
