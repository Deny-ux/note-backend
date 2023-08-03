import express from "express";
const router = express.Router();
import {
  createNoteController,
  deleteNoteController,
  getAllNotesController,
  getSingleNoteController,
  getStatsController,
  updateNoteController,
} from "../services/notesController";

router.post("/", createNoteController);
router.get("/", getAllNotesController);
router.get("/stats", getStatsController);
router.delete("/:id", deleteNoteController);
router.patch("/:id", updateNoteController);
router.get("/:id", getSingleNoteController);

export default router;
