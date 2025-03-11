import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StaticTimePicker } from "./StaticTimePicker";
import { fn } from "@storybook/test";

const meta = {
  title: "inputs/StaticTimePicker",
  component: StaticTimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof StaticTimePicker>;

export const Default: Story = {
  render: StaticTimePicker,
};

export const Landscape: Story = {
  render: StaticTimePicker,
  args: {
    orientation: "landscape",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
