import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { Badge } from "../badge/Badge";

const meta: Meta<typeof Avatar> = {
  title: "dataDisplay/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: { type: "text" },
    },
    src: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["circular", "square", "rounded"],
    },
    srcSet: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    }
  },
  args: {
    alt: "Avatar",
  },
};

export const AvatarDefault: Story = {
  render: (args) => (
    <Avatar srcSet="Avatar" {...args} />
  )
};

export const AvatarSrc: Story = {
  render: (args) => (
    <Avatar {...args} src={"https://github.com/shadcn.png"} />
  )
};

export const AvatarWithBadge: Story = {
  render: (args) => (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      color="primary"
    >
      <Avatar size="md" src="https://github.com/shadcn.png" />
    </Badge>
  ),
};

export default meta;

type Story = StoryObj<typeof Avatar>;
