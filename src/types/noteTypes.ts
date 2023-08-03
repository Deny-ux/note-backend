export type CreationDate = `${number}/${number}/${number}`;
export type CategoryType = "Task" | "Idea" | "Random Thought";

export interface SingleNote {
  id: string;
  createdAt: CreationDate;
  name: string;
  category: CategoryType;
  content: string;
  isArchived: boolean;
}
