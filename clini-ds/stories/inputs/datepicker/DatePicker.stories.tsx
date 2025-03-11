import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DatePicker } from "./DatePicker";

const meta = {
  title: "inputs/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export const Default: Story = {
  render: DatePicker,
  args: {
    label: "Selecionar Data",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Não passando a prop "variant", o valor padrão será "standard".`,
      },
    },
  },
};

export const Outlined: Story = {
  render: DatePicker,
  args: {
    label: "Selecionar Data",
    variant: "outlined",
  },
};

export const Filled: Story = {
  render: DatePicker,
  args: {
    label: "Selecionar Data",
    variant: "filled",
  },
};

export const Disabled: Story = {
  render: DatePicker,
  args: {
    disabled: true,
    label: "Data Desativada",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
