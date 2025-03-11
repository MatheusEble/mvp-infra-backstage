import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../button/Button";

const meta = {
  title: "inputs/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "medium",
    style: { marginLeft: 10 }
  },
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: { control: "select", options: ["text", "outlined", "contained"] },
    color: { control: "select", options: ["default", "primary", "secondary"] },
  },
} satisfies Meta<typeof ButtonGroup>;

const ButtonGroupsSizes = (args: object) => (
  <>
    <ButtonGroup {...args} size="small">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup {...args} size="medium">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup {...args} size="large" color="primary">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </>
);

export const ButtonGroupDefault: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
  args: {
    variant: "contained",
    children: "ButtonGroup",
  },
};

export const ContainedButtonGroups: Story = {
  render: ButtonGroupsSizes,
  args: {
    variant: "contained",
  },
};

export const OutlinedButtonGroups: Story = {
  render: ButtonGroupsSizes,
  args: {
    variant: "outlined",
  },
};

export const TextButtonGroups: Story = {
  render: ButtonGroupsSizes,
  args: {
    variant: "text",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;