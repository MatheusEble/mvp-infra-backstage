import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { FormLabel } from "./FormLabel";

const meta = {
  title: "inputs/FormLabel",
  component: FormLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "FormLabel",
    disabled: false,
    error: false,
    focused: false,
    required: false,
  }
} satisfies Meta<typeof FormLabel>;

export const Default: Story = {
  render: FormLabel
}
export const Disabled: Story = {
  render: (args) => <FormLabel {...args} />,
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  render: (args) => <FormLabel {...args} />,
  args: {
    error: true,
  },
};

export const Focused: Story = {
  render: (args) => <FormLabel {...args} />,
  args: {
    focused: true,
  },
};

export const Required: Story = {
  render: (args) => <FormLabel {...args} />,
  args: {
    required: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;