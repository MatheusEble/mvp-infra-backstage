import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextField } from "./TextField";

const meta = {
  title: "inputs/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    label: "TextField",
  }
} satisfies Meta<typeof TextField>;

export const Default: Story = {
  render: TextField,
  args: {
    label: "Paciente",
  },
};

export const Disabled: Story = {
  render: TextField,
  args: {
    disabled: true,
    value: "Implante",
    label: "Procedimento",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;