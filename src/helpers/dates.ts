import { CreationDate } from "../types/noteTypes";

export function createStringDate(date: Date): CreationDate {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
