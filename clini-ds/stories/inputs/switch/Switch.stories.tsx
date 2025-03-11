import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Switch } from "./Switch";

const meta = {
  title: "inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    checked: false,
    onChange: action("onChange"),
    disabled: false,
    size: "medium",
    color: "primary",
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
  render: Switch,
};

export const SwitchChecked: Story = {
  render: Switch,
  args: {
    checked: true,
  },
};

export const SwitchDisabled: Story = {
  render: Switch,
  args: {
    disabled: true,
  },
};
