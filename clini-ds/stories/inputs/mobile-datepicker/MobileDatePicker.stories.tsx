import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MobileDatePicker } from "./MobileDatePicker";

const meta = {
  title: "inputs/MobileDatePicker",
  component: MobileDatePicker,
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
} satisfies Meta<typeof MobileDatePicker>;

export const Default: Story = {
  render: MobileDatePicker,
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
  render: MobileDatePicker,
  args: {
    label: "Selecionar Data",
    variant: "outlined",
  },
};

export const Filled: Story = {
  render: MobileDatePicker,
  args: {
    label: "Selecionar Data",
    variant: "filled",
  },
};

export const Disabled: Story = {
  render: MobileDatePicker,
  args: {
    disabled: true,
    label: "Data Desativada",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

