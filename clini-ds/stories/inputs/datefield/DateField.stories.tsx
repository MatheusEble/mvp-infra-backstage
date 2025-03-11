import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DateField } from "./DateField";

const meta = {
  title: "inputs/DateField",
  component: DateField,
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
        options: ["standard", "outlined", "filled",],
      },
    },
  },
} satisfies Meta<typeof DateField>;

export const Default: Story = {
  render: DateField,
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
  render: DateField,
  args: {
    label: "Selecionar Data",
    variant: "outlined",
  },
};

export const Filled: Story = {
  render: DateField,
  args: {
    label: "Selecionar Data",
    variant: "filled",
  },
};

export const Disabled: Story = {
  render: DateField,
  args: {
    disabled: true,
    label: "Data Desativada",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
