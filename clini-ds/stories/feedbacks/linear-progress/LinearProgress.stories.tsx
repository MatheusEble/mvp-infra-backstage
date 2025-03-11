import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress } from "./LinearProgress";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "feedbacks/LinearProgress",
  component: LinearProgress,
  parameters: {
    layout: "centered",
  },
  args: {
    style: { width: "200px" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof LinearProgress>;

export const Default: Story = {
  render: LinearProgress
}

export const Value: Story = {
  render: () => {
    const [value, setValue] = useState(10);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>
          Random
        </Button>

        <LinearProgress
          value={value}
          style={{ width: "200px" }}
          variant="determinate"
        />
      </div>
    )
  }
}

export default meta;

type Story = StoryObj<typeof meta>;