import { Joke } from "../types/types";
import { JokeCard } from "./JokeCard";

export type ContainerProps = {
  data: Joke[];
};

export const JokesContainer = ({ data }: ContainerProps) => {
  return (
    <>
      {data?.map((joke) => (
        <JokeCard
          key={joke.id}
          value={joke.value}
          categories={joke.categories}
          isOnlyOne={data.length === 1}
        />
      ))}
    </>
  );
};
