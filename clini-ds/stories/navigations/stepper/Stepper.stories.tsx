import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Stepper } from "./Stepper";

const meta = {
  title: "navigations/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("icon clicked"),
  },
  argTypes: {
    onClick: { action: "icon clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof Stepper>;

export const Default: Story = {
  render: (args) => <Stepper />,
};

export default meta;

type Story = StoryObj<typeof meta>;
