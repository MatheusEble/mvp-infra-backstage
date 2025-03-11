import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextareaAutosize } from "./TextareaAutosize";

const meta = {
  title: "utils/TextareaAutosize",
  component: TextareaAutosize,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  }
} satisfies Meta<typeof TextareaAutosize>;

export const Default: Story = {
  render: TextareaAutosize,
  args: {
    placeholder: "Paciente"
  },
};

export default meta;

type Story = StoryObj<typeof meta>;