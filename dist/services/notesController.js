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
exports.getStats = exports.getAllNotes = exports.getSingleNote = exports.updateNote = exports.deleteNote = exports.createNote = void 0;
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "create note" });
});
exports.createNote = createNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "delete note" });
});
exports.deleteNote = deleteNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "update note" });
});
exports.updateNote = updateNote;
const getSingleNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "get songle note" });
});
exports.getSingleNote = getSingleNote;
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "get all notes" });
});
exports.getAllNotes = getAllNotes;
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: "get stats" });
});
exports.getStats = getStats;
