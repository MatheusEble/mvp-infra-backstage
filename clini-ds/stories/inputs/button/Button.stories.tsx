import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
  title: "inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    size: "medium",
    style: { marginLeft: 10 }
  },
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: { control: "select", options: ["text", "outlined", "contained"] },
    color: {
      control: "select", options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
      ]
    },
  },
} satisfies Meta<typeof Button>;

const buttonsSizes = (args: object) => (
  <>
    <Button {...args} size="small" />
    <Button {...args} size="medium" />
    <Button {...args} size="large" />
    <Button {...args} disabled size="large">disabled</Button>
    <Button {...args} loading loadingPosition="start" size="large">loading</Button>
    <Button {...args} loading loadingPosition="center" size="large">loading</Button>
    <Button {...args} loading loadingPosition="end" size="large">loading</Button>
  </>
)

export const ButtonDefault: Story = {
  render: Button,
  args: {
    variant: "contained",
    children: "Button",
  },
}

export const ContainedButtons: Story = {
  render: buttonsSizes,
  args: {
    variant: "contained",
    children: "Button",
  },
};

export const OutlinedButtons: Story = {
  render: buttonsSizes,
  args: {
    variant: "outlined",
    size: "large",
    children: "Button",
  },
};

export const TextButtons: Story = {
  render: buttonsSizes,
  args: {
    variant: "text",
    children: "Button",
  },
};

export const StartIcon: Story = {
  render: Button,
  args: {
    variant: "contained",
    startIcon: <Icon>add_new</Icon>,
    children: "Adicionar",
  },
};

export const EndIcon: Story = {
  render: Button,
  args: {
    variant: "contained",
    endIcon: <Icon>add_new</Icon>,
    children: "Adicionar",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;