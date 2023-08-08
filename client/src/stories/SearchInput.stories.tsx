import { FC } from "react";
import { SearchInput, SearchProps } from "../components/SearchInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const CountInput: FC<SearchProps> = (args) => <Template {...args} />;
