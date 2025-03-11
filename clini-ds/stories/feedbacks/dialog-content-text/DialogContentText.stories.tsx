import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { DialogContentText } from "./DialogContentText";

const meta = {
  title: "feedbacks/DialogContentText",
  component: DialogContentText,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Texto do DialogContentText"
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogContentText>;

export const Default: Story = {
  render: DialogContentText
};

export default meta;

type Story = StoryObj<typeof meta>;
