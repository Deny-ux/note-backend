"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = void 0;
const nanoid_1 = require("nanoid");
const dates_1 = require("./dates");
const index_1 = require("../index");
function createNote(name, content, category) {
    const id = (0, nanoid_1.nanoid)();
    const createdAt = (0, dates_1.createStringDate)(new Date());
    const isArchived = false;
    const newNote = { category, content, createdAt, id, isArchived, name };
    index_1.notes.push(newNote);
    return newNote;
}
exports.createNote = createNote;
