"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const notesController_1 = require("../services/notesController");
router.post("/", notesController_1.createNote);
router.delete("/:id", notesController_1.deleteNote);
router.patch("/:id", notesController_1.updateNote);
router.get("/:id", notesController_1.getSingleNote);
router.get("/", notesController_1.getAllNotes);
router.get("/stats", notesController_1.getStats);
exports.default = router;
