import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Divider } from "./Divider";
import { Button } from "../../inputs/button/Button";
import { Chip } from "@mui/material";

const meta = {
  title: "dataDisplay/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  args: {
    children: <div>Precisa ser um elemento</div>
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "300px" }}>
        <Divider />

        <Divider>
          center
        </Divider>

        <Divider textAlign="left">
          left
        </Divider>

        <Divider textAlign="right">
          right
        </Divider>
      </div>
    )
  },
};

export const CustomChildrens: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "300px" }}>
        <Divider>
          <Button>
            Button
          </Button>
        </Divider>

        <Divider textAlign="left">
          <Chip label="Chip" size="small" />
        </Divider>

        <Divider textAlign="right">
          <Chip label="Chip" size="small" />
        </Divider>
      </div>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
