import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "feedbacks/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "rectangular",
    style: {
      width: "200px",
      height: "50px"
    }
  },
  argTypes: {
    variant: { control: "select", options: ["circular", "rectangular", "rounded", "text"] },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Skeleton>;

export const Default: Story = {
  render: Skeleton,
  args: {
    variant: "rectangular"
  }
}

export const Cicular: Story = {
  render: Skeleton,
  args: {
    variant: "circular",
    style: {
      width: "50px",
      height: "50px"
    }
  }
}

export const rounded: Story = {
  render: Skeleton,
  args: {
    variant: "rounded"
  }
}

export const Text: Story = {
  render: Skeleton,
  args: {
    variant: "text"
  }
}

export default meta;

type Story = StoryObj<typeof meta>;