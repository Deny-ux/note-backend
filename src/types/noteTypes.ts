export type CreationDate = `${number}/${number}/${number}`;

export const categories = ["Task", "Idea", "Random Thought"] as const;
export type CategoryType = (typeof categories)[number];

export interface SingleNote {
  id: string;
  createdAt: CreationDate;
  name: string;
  category: CategoryType;
  content: string;
  isArchived: boolean;
}
