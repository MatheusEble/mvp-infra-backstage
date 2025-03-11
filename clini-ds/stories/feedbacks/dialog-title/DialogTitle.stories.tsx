import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { DialogTitle } from "./DialogTitle";

const meta = {
  title: "feedbacks/DialogTitle",
  component: DialogTitle,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Título do Dialog"
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogTitle>;

export const Default: Story = {
  render: DialogTitle
};

export default meta;

type Story = StoryObj<typeof meta>;
