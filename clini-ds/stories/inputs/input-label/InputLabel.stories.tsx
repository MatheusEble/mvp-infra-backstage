import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { InputLabel } from "./InputLabel";

const meta = {
  title: "inputs/InputLabel",
  component: InputLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    disabled: false,
    htmlFor: "name-input",
    children: "Nome",
  }
} satisfies Meta<typeof InputLabel>;

export const Default: Story = {
  render: InputLabel,
  args: {
    htmlFor: "name-input",
  },
};

export const Error: Story = {
  render: InputLabel,
  args: {
    htmlFor: "name-input",
    error: true,
  },
};

export const Disabled: Story = {
  render: InputLabel,
  args: {
    disabled: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;