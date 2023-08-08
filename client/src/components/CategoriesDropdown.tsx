import { Select } from "@chakra-ui/react";

export type CategoriesProps = {
  value: string[];
  onChange: (value: string) => void;
};

export const CategoriesDropdown = ({ value, onChange }: CategoriesProps) => {
  return (
    <Select
      variant="joke"
      aria-label="Categories"
      onChange={(event) => onChange(event.target.value)}
    >
      {value?.map((category) => (
        <option key={category} value={category} aria-label={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};
