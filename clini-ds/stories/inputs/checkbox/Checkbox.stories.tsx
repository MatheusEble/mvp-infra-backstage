// import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    checked: false,
    onChange: fn(),
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "button clicked" },
  },
} satisfies Meta<typeof Checkbox>;

export const CheckboxDefault: Story = {
  render: Checkbox,
  args: {
    defaultChecked: true,
  }
};

export const CheckboxDisabled: Story = {
  render: Checkbox,
  args: {
    checked: true,
    disabled: true,
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;