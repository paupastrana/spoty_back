import pool from "../db/connection.js";

export const getMyFavorites = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.id, s.title, s.artist, s.album, s.genre,
              s.cover_url, s.audio_url
       FROM user_favorites uf
       JOIN songs s ON s.id = uf.song_id
       WHERE uf.user_id = $1
       ORDER BY uf.created_at DESC`,
      [req.userId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error obteniendo favoritos:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const addFavorite = async (req, res) => {
  const { songId } = req.params;

  try {
    await pool.query(
      `INSERT INTO user_favorites (user_id, song_id)
       VALUES ($1, $2)
       ON CONFLICT (user_id, song_id) DO NOTHING`,
      [req.userId, songId]
    );

    res.json({ message: "Añadido a favoritos" });
  } catch (err) {
    console.error("Error añadiendo favorito:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const removeFavorite = async (req, res) => {
  const { songId } = req.params;

  try {
    await pool.query(
      `DELETE FROM user_favorites
       WHERE user_id = $1 AND song_id = $2`,
      [req.userId, songId]
    );

    res.json({ message: "Eliminado de favoritos" });
  } catch (err) {
    console.error("Error eliminando favorito:", err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
