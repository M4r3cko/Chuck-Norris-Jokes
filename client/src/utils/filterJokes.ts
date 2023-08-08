import { RANDOM_CATEGORY } from "../constants";
import { Joke } from "../types/types";

export type FilterJokesParams = {
  jokes: Joke[];
  category: string;
  count: number;
  searchTerm: string;
};

export const filterJokes = ({
  jokes,
  category,
  count,
  searchTerm,
}: FilterJokesParams) => {
  return jokes
    .filter(
      (joke) => category === RANDOM_CATEGORY || joke.categories.includes(category)
    )
    .filter((joke) =>
      joke.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .splice(0, count);
};
