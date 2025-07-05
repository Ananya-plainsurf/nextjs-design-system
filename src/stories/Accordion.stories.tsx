import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    defaultValue: {
      control: "text",
    },
    collapsible: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    defaultValue: "item-1",
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>
            Content for section 1.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>
            Content for section 2.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Section 3</AccordionTrigger>
          <AccordionContent>
            Content for section 3.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
  parameters: {
    options: [
      {
        name: "Multiple",
        args: { type: "multiple", defaultValue: ["item-1", "item-2"], collapsible: true },
      },
      {
        name: "Collapsible Off",
        args: { collapsible: false },
      },
      {
        name: "Section 2 Open",
        args: { defaultValue: "item-2" },
      },
      {
        name: "Disabled",
        args: { disabled: true },
      },
    ],
  },
};
