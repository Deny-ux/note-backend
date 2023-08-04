import { CategoryType, SingleNote } from "../types/noteTypes";

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
