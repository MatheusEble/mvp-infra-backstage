import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta = {
  title: "feedbacks/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    severity: "info",
    children: "Esse é o componente de alerta."
  },
  argTypes: {
    severity: { control: "select", options: ["success", "info", "warning", "error"] },
  },
} satisfies Meta<typeof Alert>;

export const Info: Story = {
  render: Alert,
  args: {
    severity: "info",
  }
}

export const Success: Story = {
  render: Alert,
  args: {
    severity: "success",
  }
}

export const Error: Story = {
  render: Alert,
  args: {
    severity: "error",
  }
}

export const warning: Story = {
  render: Alert,
  args: {
    severity: "warning",
  }
}

export default meta;

type Story = StoryObj<typeof meta>;