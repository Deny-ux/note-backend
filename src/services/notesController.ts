import { Request, Response } from "express";
import { isValidCategory } from "../helpers/validCategory";
import { v4 as uuidv4 } from "uuid";
import { createStringDate } from "../helpers/dates";

export const createNoteController = async (req: Request, res: Response) => {
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
  if (!isValidCategory(category)) {
    throw new Error("Provided category is not valid");
  }
  const id = uuidv4();
  const createdAt = createStringDate(new Date());
  const isArchived = false;
  const newNote = { category, content, createdAt, id, isArchived, name };
  req.app.locals.notes.push(newNote);
  return res.json({ data: { newNote } });
};
export const deleteNoteController = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (typeof id !== "string") {
    throw new Error("name, content and category fields are mandatory!!!");
  }
  const foundNote = req.app.locals.notes.find((note) => note.id === id);
  return res.json({ data: "delete note" });
};
export const updateNoteController = async (req: Request, res: Response) => {
  return res.json({ data: "update note" });
};

export const getSingleNoteController = async (req: Request, res: Response) => {
  return res.json({ data: "??" });
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
  return res.json({ data: "get statssdf" });
};
