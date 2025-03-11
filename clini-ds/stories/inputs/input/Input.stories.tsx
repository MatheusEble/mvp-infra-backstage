import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "./Input";

const meta = {
  title: "inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  }
} satisfies Meta<typeof Input>;

export const InputDefault: Story = {
  render: Input,
  args: {
    placeholder: "placeholder"
  },
};

export const DisabledWithDefaultValue: Story = {
  render: Input,
  args: {
    disabled: true,
    defaultValue: "Implante",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;