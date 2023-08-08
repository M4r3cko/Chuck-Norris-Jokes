import { Flex, FormControl, Grid, GridItem } from "@chakra-ui/react";
import { CategoriesDropdown } from "./CategoriesDropdown";
import { JokesCountInput } from "./JokesCountInput";
import { SearchInput } from "./SearchInput";

export type FilterProps = {
  categories: string[];
  searchTerm: string;
  count: number;
  onSearchChange: (value: string) => void;
  onCountChange: (value: number) => void;
  onCategoryChange: (value: string) => void;
};

export const Filter = ({
  categories,
  searchTerm,
  count,
  onSearchChange,
  onCountChange,
  onCategoryChange,
}: FilterProps) => {
  return (
    <FormControl>
      <Flex m={2}>
        <SearchInput onChange={onSearchChange} value={searchTerm} />
      </Flex>
      <Grid m={2} mb={4} templateColumns="repeat(2, 1fr)" gap={3}>
        <GridItem w="100%">
          <CategoriesDropdown onChange={onCategoryChange} value={categories} />
        </GridItem>
        <GridItem w="100%">
          <JokesCountInput
            jokesCount={count}
            handleJokesCountChange={onCountChange}
          />
        </GridItem>
      </Grid>
    </FormControl>
  );
};
