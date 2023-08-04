"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNoteId = exports.isValidNewNote = void 0;
const validCategory_1 = require("./validCategory");
function isValidNewNote(name, content, category) {
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
    return true;
}
exports.isValidNewNote = isValidNewNote;
function isValidNoteId(noteId) {
    if (!noteId) {
        throw new Error("id field is mandatory!!!");
    }
    if (typeof noteId !== "string") {
        throw new Error("id should be string");
    }
    return true;
}
exports.isValidNoteId = isValidNoteId;
