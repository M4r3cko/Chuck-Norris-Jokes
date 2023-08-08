import { FC } from "react";
import { Filter, FilterProps } from "../components/Filter";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const DropDown: FC<FilterProps> = (args) => <Template {...args} />;
