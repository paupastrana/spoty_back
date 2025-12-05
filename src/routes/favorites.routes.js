import express from "express";
import { authRequired } from "../middleware/auth.middleware.js";
import {
  getMyFavorites,
  addFavorite,
  removeFavorite,
} from "../controllers/favorites.controllers.js";

const router = express.Router();

router.get("/me/favorites", authRequired, getMyFavorites);
router.post("/me/favorites/:songId", authRequired, addFavorite);
router.delete("/me/favorites/:songId", authRequired, removeFavorite);

export default router;



