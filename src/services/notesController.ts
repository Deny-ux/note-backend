import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { createStringDate } from "../helpers/dates";
import { SingleNote } from "../types/noteTypes";
import { getCountByCategory } from "../helpers/manageNotes";
import { isValidCategory } from "../validators/validCategory";
import { isValidNewNote, isValidNoteId } from "../validators/notesValidator";

export const createNoteController = async (req: Request, res: Response) => {
  const { name, content, category } = req.body;
  // if (!name || !content || !category) {
  //   throw new Error("name, content and category fields are mandatory!!!");
  // }
  // if (typeof name !== "string") {
  //   throw new Error("name of the note should be type of string");
  // }
  // if (typeof content !== "string") {
  //   throw new Error("content of the note should be type of string");
  // }
  // if (!isValidCategory(category)) {
  //   throw new Error("Provided category is not valid");
  // }
  if (isValidNewNote(name, content, category)) {
    const id = uuidv4();
    const createdAt = createStringDate(new Date());
    const isArchived = false;
    const newNote = { category, content, createdAt, id, isArchived, name };
    req.app.locals.notes.push(newNote);
    return res.json({ data: { newNote } });
  }
};
export const deleteNoteController = async (req: Request, res: Response) => {
  const { id: noteId } = req.params;
  if (isValidNoteId(noteId)) {
    const foundNote = req.app.locals.notes.find(
      (note: SingleNote) => note.id === noteId
    );
    if (!foundNote) {
      throw new Error(`Cannot find note with provided id ${noteId}!!!`);
    }
    req.app.locals.notes = req.app.locals.notes.filter(
      (note: SingleNote) => note.id !== noteId
    );
    return res.json({ data: { deletedNote: foundNote } });
  }
};
export const updateNoteController = async (req: Request, res: Response) => {
  const { name, content, isArchived, category } = req.body;
  const { id: noteId } = req.params;
  if (isValidNoteId(noteId)) {
    const foundNote = req.app.locals.notes.find(
      (note: SingleNote) => note.id === noteId
    );
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
      if (!isValidCategory(category)) {
        throw new Error("new provided category is not valid");
      }
      foundNote.category = category;
    }
    if (isArchived) {
      if (typeof isArchived === "boolean") {
        throw new Error("isArchived should be either true or false");
      }
      foundNote.isArchived = isArchived;
    }
    return res.json({ data: { updatedNote: foundNote } });
  }
};

export const getSingleNoteController = async (req: Request, res: Response) => {
  const { id: noteId } = req.params;
  if (isValidNoteId(noteId)) {
    const foundNote = req.app.locals.notes.find(
      (note: SingleNote) => note.id === noteId
    );
    if (!foundNote) {
      throw new Error(`Cannot find note with provided id ${noteId}!!!`);
    }
    return res.json({ data: { note: foundNote } });
  }
};
export const getAllNotesController = async (req: Request, res: Response) => {
  return res.json({
    data: {
      notes: req.app.locals.notes,
      nbHits: req.app.locals.notes.length,
    },
  });
};

export const getStatsController = async (req: Request, res: Response) => {
  const stats = getCountByCategory(req.app.locals.notes);
  return res.json({ data: { stats: stats } });
};
