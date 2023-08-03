"use strict";
// import { v4 as uuidv4 } from "uuid";
// import { CategoryType, SingleNote } from "../types/noteTypes";
// import { createStringDate } from "./dates";
// // import { notes } from "../index";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountByCategory = void 0;
function getCountByCategory(notes) {
    const categories = new Set(notes.map(({ category }) => category));
    const sortedByCategoryNotes = [];
    categories.forEach((category) => {
        const activeAndArchivedObject = notes.reduce((acc, curr) => {
            if (curr.category === category) {
                curr.isArchived
                    ? (acc.archived = acc.archived + 1)
                    : (acc.active = acc.active + 1);
            }
            return acc;
        }, { archived: 0, active: 0 });
        sortedByCategoryNotes.push(Object.assign({ category }, activeAndArchivedObject));
    });
    return sortedByCategoryNotes;
}
exports.getCountByCategory = getCountByCategory;
