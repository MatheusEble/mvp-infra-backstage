import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Fab } from "./FloatingActionButton";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
  title: "inputs/Fab",
  component: Fab,
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
    color: { control: "select", options: ["default", "primary", "secondary"] },
  },
} satisfies Meta<typeof Fab>;

const fabSizes = (args: object) => (
  <>
    <Fab color="primary" aria-label="add" {...args}>
      <Icon>add</Icon>
    </Fab>
    <Fab color="secondary" aria-label="edit" {...args}>
      <Icon>edit</Icon>
    </Fab>
    <Fab variant="extended" {...args}>
      <Icon>navigation</Icon>
      Navigate
    </Fab>
    <Fab disabled aria-label="like" {...args}>
      <Icon>favorite</Icon>
    </Fab>
  </>
)

export const FabDefault: Story = {
  render: (args) => <Fab {...args}><Icon>save</Icon></Fab>,
  args: {
    color: "primary",
  },
}

export const FabVariants: Story = {
  render: fabSizes,
  args: {
    color: "default",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
