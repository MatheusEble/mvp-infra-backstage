import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DateTimeField } from "./DateTimeField";
import { Dayjs } from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof DateTimeField> = {
  title: "inputs/DateTimeField",
  component: DateTimeField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Select Date & Time",
    onChange: fn(),
    variant: "standard",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
        defaultValue: "standard",
      },
    },
  },
};

export const Default: StoryObj<typeof meta> = {
  render: DateTimeField,
  args: {
    variant: "standard",
  },
};

export const Outlined: StoryObj<typeof meta> = {
  render: DateTimeField,
  args: {
    variant: "outlined",
    disabled: false,
  },
};

export const Filled: StoryObj<typeof meta> = {
  args: {
    variant: "filled",
  },
};

export const Disabled: StoryObj<typeof meta> = {
  render: DateTimeField,
  args: {
    disabled: true,
    variant: "standard",
  },
};

export default meta;
