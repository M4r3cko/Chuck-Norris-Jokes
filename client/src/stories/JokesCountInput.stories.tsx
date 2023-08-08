import { FC } from "react";
import {
  JokesCountInput,
  CountInputProps,
} from "../components/JokesCountInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "JokesCountInput",
  component: JokesCountInput,
} as ComponentMeta<typeof JokesCountInput>;

const Template: ComponentStory<typeof JokesCountInput> = (args) => (
  <JokesCountInput {...args} />
);

export const CountInput: FC<CountInputProps> = (args) => <Template {...args} />;
