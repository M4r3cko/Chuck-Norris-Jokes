import { ComponentStory, ComponentMeta } from "@storybook/react";
import { JokeCard, JokeCardProps } from "../components/JokeCard";
import React from "react";

export default {
  title: "JokeCard",
  component: JokeCard,
} as ComponentMeta<typeof JokeCard>;

const Template: ComponentStory<typeof JokeCard> = (args) => (
  <JokeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "2",
  value:
    "In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said GET A JOB. That is the story of the universe.",
  categories: ["Animals"],
  isOnlyOne: true,
};

export const DefaultWithLogo = Template.bind({});
DefaultWithLogo.args = {
  id: "2",
  value:
    "In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said GET A JOB. That is the story of the universe.",
  categories: ["Animals"],
  isOnlyOne: true,
};
