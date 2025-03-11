import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { StaticDatePicker } from "./StaticDatePicker";

const meta = {
  title: "inputs/StaticDatePicker",
  component: StaticDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof StaticDatePicker>;

export const Default: Story = {
  render: StaticDatePicker,
};

export default meta;

type Story = StoryObj<typeof meta>;
