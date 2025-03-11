import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { FormHelperText } from "./FormHelperText";

const meta = {
  title: "inputs/FormHelperText",
  component: FormHelperText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Helper text",
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof FormHelperText>;

export const Default: Story = {
  render: FormHelperText,
}
export const Disabled: Story = {
  render: FormHelperText,
  args: {
    disabled: true,
  },
}

export const Error: Story = {
  render: FormHelperText,
  args: {
    error: true,
  },
}

export default meta;

type Story = StoryObj<typeof meta>;