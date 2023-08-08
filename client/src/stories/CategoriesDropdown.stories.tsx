import { FC } from "react";
import {
  CategoriesDropdown,
  CategoriesProps,
} from "../components/CategoriesDropdown";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CategoriesDropdown",
  component: CategoriesDropdown,
} as ComponentMeta<typeof CategoriesDropdown>;

const Template: ComponentStory<typeof CategoriesDropdown> = (args) => (
  <CategoriesDropdown {...args} />
);

export const DropDown: FC<CategoriesProps> = (args) => <Template {...args} />;
