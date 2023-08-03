"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsController = exports.getAllNotesController = exports.getSingleNoteController = exports.updateNoteController = exports.deleteNoteController = exports.createNoteController = void 0;
const validCategory_1 = require("../helpers/validCategory");
const uuid_1 = require("uuid");
const dates_1 = require("../helpers/dates");
const createNoteController = async (req, res) => {
    const { name, content, category } = req.body;
    if (!name || !content || !category) {
        throw new Error("name, content and category fields are mandatory!!!");
    }
    if (typeof name !== "string") {
        throw new Error("name of the note should be type of string");
    }
    if (typeof content !== "string") {
        throw new Error("content of the note should be type of string");
    }
    if (!(0, validCategory_1.isValidCategory)(category)) {
        throw new Error("Provided category is not valid");
    }
    const id = (0, uuid_1.v4)();
    const createdAt = (0, dates_1.createStringDate)(new Date());
    const isArchived = false;
    const newNote = { category, content, createdAt, id, isArchived, name };
    req.app.locals.notes.push(newNote);
    return res.json({ data: { newNote } });
};
exports.createNoteController = createNoteController;
const deleteNoteController = async (req, res) => {
    const { id } = req.body;
    if (typeof id !== "string") {
        throw new Error("name, content and category fields are mandatory!!!");
    }
    const foundNote = req.app.locals.notes.find((note) => note.id === id);
    return res.json({ data: "delete note" });
};
exports.deleteNoteController = deleteNoteController;
const updateNoteController = async (req, res) => {
    return res.json({ data: "update note" });
};
exports.updateNoteController = updateNoteController;
const getSingleNoteController = async (req, res) => {
    return res.json({ data: "??" });
};
exports.getSingleNoteController = getSingleNoteController;
const getAllNotesController = async (req, res) => {
    return res.json({
        data: {
            notes: req.app.locals.notes,
            nbHits: req.app.locals.notes.length,
        },
    });
};
exports.getAllNotesController = getAllNotesController;
const getStatsController = async (req, res) => {
    return res.json({ data: "get statssdf" });
};
exports.getStatsController = getStatsController;
//# sourceMappingURL=notesController.js.map