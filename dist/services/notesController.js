"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsController = exports.getAllNotesController = exports.getSingleNoteController = exports.updateNoteController = exports.deleteNoteController = exports.createNoteController = void 0;
const uuid_1 = require("uuid");
const dates_1 = require("../helpers/dates");
const manageNotes_1 = require("../helpers/manageNotes");
const validCategory_1 = require("../validators/validCategory");
const notesValidator_1 = require("../validators/notesValidator");
const createNoteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, content, category } = req.body;
    if ((0, notesValidator_1.isValidNewNote)(name, content, category)) {
        const id = (0, uuid_1.v4)();
        const createdAt = (0, dates_1.createStringDate)(new Date());
        const isArchived = false;
        const newNote = { category, content, createdAt, id, isArchived, name };
        req.app.locals.notes.push(newNote);
        return res.json({ data: { newNote } });
    }
});
exports.createNoteController = createNoteController;
const deleteNoteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: noteId } = req.params;
    if ((0, notesValidator_1.isValidNoteId)(noteId)) {
        const foundNote = req.app.locals.notes.find((note) => note.id === noteId);
        if (!foundNote) {
            throw new Error(`Cannot find note with provided id ${noteId}!!!`);
        }
        req.app.locals.notes = req.app.locals.notes.filter((note) => note.id !== noteId);
        return res.json({ data: { deletedNote: foundNote } });
    }
});
exports.deleteNoteController = deleteNoteController;
const updateNoteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, content, isArchived, category } = req.body;
    const { id: noteId } = req.params;
    if ((0, notesValidator_1.isValidNoteId)(noteId)) {
        const foundNote = req.app.locals.notes.find((note) => note.id === noteId);
        if (!foundNote) {
            throw new Error(`Cannot find note with provided id ${noteId}!!!`);
        }
        if (name) {
            if (typeof name !== "string") {
                throw new Error("new name of the note should be type of string");
            }
            foundNote.name = name;
        }
        if (content) {
            if (typeof content !== "string") {
                throw new Error("new content of the note should be type of string");
            }
            foundNote.content = content;
        }
        if (category) {
            if (!(0, validCategory_1.isValidCategory)(category)) {
                throw new Error("new provided category is not valid");
            }
            foundNote.category = category;
        }
        if (isArchived) {
            console.log(isArchived);
            if (typeof isArchived !== "boolean") {
                throw new Error("isArchived should be either true or false");
            }
            foundNote.isArchived = isArchived;
        }
        return res.json({ data: { updatedNote: foundNote } });
    }
});
exports.updateNoteController = updateNoteController;
const getSingleNoteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: noteId } = req.params;
    if ((0, notesValidator_1.isValidNoteId)(noteId)) {
        const foundNote = req.app.locals.notes.find((note) => note.id === noteId);
        if (!foundNote) {
            throw new Error(`Cannot find note with provided id ${noteId}!!!`);
        }
        return res.json({ data: { note: foundNote } });
    }
});
exports.getSingleNoteController = getSingleNoteController;
const getAllNotesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({
        data: {
            notes: req.app.locals.notes,
            nbHits: req.app.locals.notes.length,
        },
    });
});
exports.getAllNotesController = getAllNotesController;
const getStatsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stats = (0, manageNotes_1.getCountByCategory)(req.app.locals.notes);
    return res.json({ data: { stats: stats } });
});
exports.getStatsController = getStatsController;
