import { CategoryType, categories } from "../types/noteTypes";
export const isValidCategory = (x: any): x is CategoryType =>
  categories.includes(x);
