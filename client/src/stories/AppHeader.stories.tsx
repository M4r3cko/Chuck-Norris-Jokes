import { Story, Meta } from "@storybook/react";
import { AppHeader } from "../components/AppLayout/AppHeader";

export default {
  component: AppHeader,
  title: "Components/AppHeader",
} as Meta;

const Template: Story = () => <AppHeader />;

export const Default = Template.bind({});
