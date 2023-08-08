import { Joke } from "../types/types";

export const randomize = (items: Joke[]) => {
  return [...items].sort(() => Math.random() - 0.5);
};
