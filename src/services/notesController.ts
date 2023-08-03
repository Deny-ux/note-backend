import { Request, Response } from "express";

export const createNote = async (req: Request, res: Response) => {
  res.json({ msg: "create note" });
};

export const deleteNote = async (req: Request, res: Response) => {
  res.json({ msg: "delete note" });
};
export const updateNote = async (req: Request, res: Response) => {
  res.json({ msg: "update note" });
};

export const getSingleNote = async (req: Request, res: Response) => {
  res.json({ msg: "get songle note" });
};
export const getAllNotes = async (req: Request, res: Response) => {
  res.json({ msg: "get all notes" });
};

export const getStats = async (req: Request, res: Response) => {
  res.json({ msg: "get stats" });
};
