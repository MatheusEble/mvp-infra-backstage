import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { StepLabel } from "./StepLabel";

const meta = {
  title: "navigations/StepLabel",
  component: StepLabel,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "children",
    optional: "optional",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StepLabel>;

export const Default: Story = {
  render: (args) => <StepLabel {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;
