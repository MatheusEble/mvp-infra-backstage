import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Link as MUILink } from "@mui/material";
import { fn } from "@storybook/test";

export default {
  title: "navigations/Link",
  component: MUILink,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
    href: "https://mui.com/material-ui/react-link/#underline",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  tags: ["autodocs"],
  argTypes: {
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
      defaultValue: "_blank",
    },
    rel: { control: "text", defaultValue: "noopener noreferrer" },
    underline: {
      control: "select",
      options: ["none", "hover", "always"],
      defaultValue: "hover",
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "textPrimary", "textSecondary"],
      defaultValue: "inherit",
    },
  },
} satisfies Meta<typeof MUILink>;


export const Default: StoryObj = {
  render: (args) => <MUILink {...args}>Link Default</MUILink>,
  args: {
    color: "primary",
    href: "https://mui.com/material-ui/react-link/",
  },
};

export const Hover: StoryObj = {
  render: (args) => <MUILink {...args}>Link Underline Hover</MUILink>,
  args: {
    underline: "hover",
  },
};

export const UnderlineNone: StoryObj = {
  render: (args) => <MUILink {...args}>Link Underline None</MUILink>,
  args: {
    underline: "none",
  },
};

export const UnderlineAlways: StoryObj = {
  render: (args) => <MUILink {...args}>Link Underline Always</MUILink>,
  args: {
    underline: "always",
  },
};