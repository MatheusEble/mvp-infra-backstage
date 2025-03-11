import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Radio } from "./radio";
import { FormControlLabel } from "../form-control-label/FormControlLabel";

const meta = {
  title: "inputs/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    checked: false,
    onChange: fn(),
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "button clicked" },
  },
} satisfies Meta<typeof Radio>;

export const RadioDefault: Story = {
  render: Radio,
  args: {
    defaultChecked: true,
  }
};

export const RadioDisabled: Story = {
  render: Radio,
  args: {
    checked: true,
    disabled: true,
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export const FormControlLabelExample: Story = {
  render: () => {
    return (
      <FormControlLabel value="other" control={<Radio />} label="Outro" />
    );
  },
  args: {
    checked: true,
    disabled: true,
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;