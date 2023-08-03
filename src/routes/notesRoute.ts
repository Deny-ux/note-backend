import express from "express";
const router = express.Router();
import {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  getStats,
  updateNote,
} from "../services/notesController";

router.post("/", createNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);
router.get("/:id", getSingleNote);
router.get("/", getAllNotes);
router.get("/stats", getStats);

export default router;
