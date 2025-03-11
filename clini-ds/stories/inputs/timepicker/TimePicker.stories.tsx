import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TimePicker } from "./TimePicker";

const meta = {
  title: "inputs/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    variant: "standard",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
        defaultValue: "standard",
      },
    },
  },
} satisfies Meta<typeof TimePicker>;

export const Default: Story = {
  render: TimePicker,
  args: {
    label: "Selecionar Hora",
    disabled: false,
  },
};

export const Outlined: Story = {
  render: TimePicker,
  args: {
    variant: "outlined",
  },
};

export const Filled: Story = {
  render: TimePicker,
  args: {
    variant: "filled",
  },
};

export const Disabled: Story = {
  render: TimePicker,
  args: {
    disabled: true,
    variant: "standard",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
