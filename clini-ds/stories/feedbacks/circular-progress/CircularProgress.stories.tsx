import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "./CircularProgress";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "feedbacks/CircularProgress",
  component: CircularProgress,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "indeterminate",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["indeterminate", "determinate"] },
    value: { control: "number" },
  },
} satisfies Meta<typeof CircularProgress>;

export const Default: Story = {
  render: CircularProgress,
}

export const Determinate: Story = {
  render: () => {
    const [value, setValue] = useState(10);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>
          Random
        </Button>

        <CircularProgress
          variant="determinate"
          value={value}
        />
      </div>
    )
  }
}

export default meta;

type Story = StoryObj<typeof meta>;