import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { AlertTitle } from "./AlertTitle";

const meta = {
  title: "feedbacks/AlertTitle",
  component: AlertTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Esse é o componente de AlertTitle."
  }
} satisfies Meta<typeof AlertTitle>;

export const Default: Story = {
  render: AlertTitle,
}

export default meta;

type Story = StoryObj<typeof meta>;