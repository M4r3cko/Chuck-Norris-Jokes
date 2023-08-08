import { useState } from "react";
import { Filter } from "../components/Filter";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { Alert } from "../components/Alert";
import { JokesContainer } from "../components/JokesContainer";
import { RANDOM_CATEGORY } from "../constants";
import { filterJokes } from "../utils/filterJokes";
import { randomize } from "../utils/randomize";
import { Joke } from "../types/types";
import { GetServerSideProps } from "next";
import client from "../utils/apollo-client";
import { gql } from "@apollo/client";

export type IndexProps = {
  fetchedJokes: Joke[];
  fetchedCategories: string[];
};

export const index = ({ fetchedJokes, fetchedCategories }: IndexProps) => {
  const [jokes, setJokes] = useState(fetchedJokes);
  const [jokesCount, setJokesCount] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState(fetchedCategories[0]);

  const filteredJokes = filterJokes({
    category: currentCategory,
    count: jokesCount,
    jokes,
    searchTerm,
  });

  const alertMessage = () => {
    return filteredJokes.length < jokesCount && filteredJokes.length !== 0
      ? filteredJokes.length === 1
        ? "With your filter, there is only 1 joke."
        : "With your filter, there are only " + filteredJokes.length + " jokes."
      : "Couldn't find any jokes 🤷.";
  };

  return (
    <>
      <Flex p="3" justifyContent="center">
        <Box maxWidth={600}>
          <Filter
            categories={fetchedCategories}
            count={jokesCount}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onCountChange={setJokesCount}
            onCategoryChange={setCurrentCategory}
          />
          <Button variant="outline" onClick={() => setJokes(randomize(jokes))}>
            Get random jokes
          </Button>
        </Box>
      </Flex>
      <Box pb={[75, 10]} pl={[3, 50]} pr={[3, 50]}>
        {filteredJokes.length < jokesCount && (
          <Alert status="info" title="Sorry" description={alertMessage()} />
        )}
        {currentCategory === "random" && jokesCount >= 500 && (
          <Alert
            status="info"
            title="That's a lot of jokes"
            description={"Press Get random jokes for more"}
          />
        )}
        <SimpleGrid
          p={[1, 2, 3, 4]}
          minChildWidth={["100%", 350]}
          justifyItems={"center"}
          spacing={[3, 7]}
        >
          <JokesContainer data={filteredJokes} />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetData {
        categories
        allJokes {
          result {
            id
            value
            categories
          }
        }
      }
    `,
  });
  const categoriesWithRandomCategory = [RANDOM_CATEGORY, ...data.categories];
  const randomizedFetchedJokes = randomize(data.allJokes.result);

  return {
    props: {
      fetchedJokes: randomizedFetchedJokes,
      fetchedCategories: categoriesWithRandomCategory,
    },
  };
};
