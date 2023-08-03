// import { v4 as uuidv4 } from "uuid";
// import { CategoryType, SingleNote } from "../types/noteTypes";
// import { createStringDate } from "./dates";
// // import { notes } from "../index";

import { CategoryType, SingleNote } from "../types/noteTypes";

// export function createNote(
//   name: string,
//   content: string,
//   category: CategoryType
// ) {
//   const id = uuidv4();
//   const createdAt = createStringDate(new Date());
//   const isArchived = false;
//   const newNote = { category, content, createdAt, id, isArchived, name };
//   notes.push({ category, content, createdAt, id, isArchived, name });

//   return newNote;
// }

type SortedByCategoryNotes = {
  category: CategoryType;
  archived: number;
  active: number;
};

export function getCountByCategory(notes: SingleNote[]) {
  const categories = new Set(notes.map(({ category }) => category));
  const sortedByCategoryNotes: SortedByCategoryNotes[] = [];
  categories.forEach((category) => {
    const activeAndArchivedObject = notes.reduce(
      (acc, curr) => {
        if (curr.category === category) {
          curr.isArchived
            ? (acc.archived = acc.archived + 1)
            : (acc.active = acc.active + 1);
        }
        return acc;
      },
      { archived: 0, active: 0 }
    );

    sortedByCategoryNotes.push({
      category,
      ...activeAndArchivedObject,
    });
  });
  return sortedByCategoryNotes;
}
