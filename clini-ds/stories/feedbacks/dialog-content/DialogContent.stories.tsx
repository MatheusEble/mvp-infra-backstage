import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { DialogContent } from "./DialogContent";

const meta = {
  title: "feedbacks/DialogContent",
  component: DialogContent,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Conetúdo do DialogContent"
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogContent>;

export const Default: Story = {
  render: DialogContent
};

export default meta;

type Story = StoryObj<typeof meta>;
