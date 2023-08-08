import { Input } from "@chakra-ui/react";

export type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: SearchProps) => {
  return (
    <Input
      variant="joke"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search for jokes"
      aria-label="Search for jokes"
    />
  );
};
