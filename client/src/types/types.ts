export type Joke = {
  value: string;
  categories: string[];
  id?: string;
};

export type FetchData = {
  data: Joke[] | undefined;
  isLoading: boolean;
  isError: boolean;
};
