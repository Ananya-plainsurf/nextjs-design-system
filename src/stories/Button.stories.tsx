import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
  },
};
