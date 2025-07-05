import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
} from "../components/Drawer";
import { Button } from "../components/Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["bottom", "top", "left", "right"],
    },
    open: {
      control: "boolean",
    },
    modal: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    direction: "bottom",
    modal: true,
    children: (
      <>
        <DrawerTrigger asChild>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Open Drawer</button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a simple drawer example.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">Drawer body content goes here.</div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant={"outline"} size={"sm"} className="px-4 py-2 bg-gray-200 rounded">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
  },
  parameters: {
    options: [
      {
        name: "Top",
        args: { direction: "top" },
      },
      {
        name: "Left",
        args: { direction: "left" },
      },
      {
        name: "Right",
        args: { direction: "right" },
      },
      {
        name: "Non-modal",
        args: { modal: false },
      },
    ],
  },
};
