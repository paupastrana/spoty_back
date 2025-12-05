import { Router } from "express";
import { getSongs } from "../controllers/songs.controllers.js";

const router = Router();

router.get("/", getSongs);

export default router;
