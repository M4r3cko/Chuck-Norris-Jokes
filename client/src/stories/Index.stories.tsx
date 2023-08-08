import React from "react";
import { Meta, Story } from "@storybook/react";
import { index as Index, IndexProps } from "../pages/index";
import { Joke } from "../types/types";

export default {
  title: "Index",
  component: Index,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<IndexProps> = (args) => <Index {...args} />;

const fetchedCategories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];
const fetchedJokes: Joke[] = [
  {
    id: "1",
    categories: ["animal"],
    value:
      "Chuck Norris once rode a bull, and nine months later it had a calf.",
  },
  {
    id: "2",
    categories: ["career"],
    value:
      "Chuck Norris' first job was as a paperboy. There were no survivors.",
  },
];

export const Default = Template.bind({});
Default.args = { fetchedCategories, fetchedJokes };
