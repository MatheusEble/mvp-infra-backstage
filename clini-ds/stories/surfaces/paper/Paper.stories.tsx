import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Paper } from "./Paper";

const meta = {
  title: "surfaces/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Paper>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 24, flexDirection: "column" }}>
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <Paper
            key={elevation}
            elevation={elevation}
            style={{ padding: 8 }}
          >
            {`elevation=${elevation}`}
          </Paper>
        ))}
      </div>
    );
  },
};

export const Corners: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: 24, flexDirection: "column" }}>
        <Paper
          style={{ padding: 8 }}
          square={false}
        >
          rounded corners
        </Paper>

        <Paper
          style={{ padding: 8 }}
          square
        >
          square corners
        </Paper>
      </div>
    );
  }
}

export default meta;

type Story = StoryObj<typeof meta>;
