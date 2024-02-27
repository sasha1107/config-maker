import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: "boolean" },
    showCount: { control: "boolean" },
    showClear: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "number", "password", "tel", "email", "url"],
    },
    inputMode: {
      control: "select",
      options: [
        "none",
        "text",
        "decimal",
        "numeric",
        "tel",
        "search",
        "email",
        "url",
      ],
    },
    maxLength: { control: "number" },
    placeholder: { control: "text" },
    block: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
