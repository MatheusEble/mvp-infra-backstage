import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconButton } from "./IconButton";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
  title: "inputs/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    size: "medium",
  },
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
  },
} satisfies Meta<typeof IconButton>;

const IconButtonsSizes = (args: any) => (
  <div style={{ display: "flex", gap: 40 }}>
    <div>
      <h3 style={{ margin: 0 }}>Small</h3>
      <IconButton {...args} size="small" />
    </div>

    <div>
      <h3 style={{ margin: 0 }}>Medium</h3>
      <IconButton {...args} size="medium" />
    </div>

    <div>
      <h3 style={{ margin: 0 }}>Large</h3>
      <IconButton {...args} size="large" />
    </div>
  </div>
)

export const IconButtonDefault: Story = {
  render: IconButton,
  args: {
    children: <Icon>star</Icon>,
  },
}

export const DifferentSizes: Story = {
  render: IconButtonsSizes,
  args: {
    size: "large",
    children: <Icon>person</Icon>,
  },
};

export const PrimaryIconButtons: Story = {
  render: () => (<IconButtonsSizes color="primary"><Icon>delete</Icon></IconButtonsSizes>),
};

export default meta;

type Story = StoryObj<typeof meta>;