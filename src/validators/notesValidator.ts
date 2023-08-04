import { isValidCategory } from "./validCategory";
import { CategoryType } from "../types/noteTypes";

export function isValidNewNote(
  name: string,
  content: string,
  category: CategoryType
) {
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
  return true;
}

export function isValidNoteId(noteId: string) {
  if (!noteId) {
    throw new Error("id field is mandatory!!!");
  }
  if (typeof noteId !== "string") {
    throw new Error("id should be string");
  }
  return true;
}
