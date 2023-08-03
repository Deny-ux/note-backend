"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const notesController_1 = require("../services/notesController");
router.post("/", notesController_1.createNoteController);
router.get("/", notesController_1.getAllNotesController);
router.get("/stats", notesController_1.getStatsController);
router.delete("/:id", notesController_1.deleteNoteController);
router.patch("/:id", notesController_1.updateNoteController);
router.get("/:id", notesController_1.getSingleNoteController);
exports.default = router;
//# sourceMappingURL=notesRoute.js.map