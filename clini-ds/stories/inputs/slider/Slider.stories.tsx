import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Slider } from "./Slider";

const meta = {
  title: "inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "padded"
  },
  args: {
    onChangeCommitted: action("onChangeCommitted"),
    size: "medium",
    step: 10,
    marks: true,
    min: 5,
    max: 100,
    defaultValue: 50,
    valueLabelDisplay: "auto",
    style: {
      marginTop: 50
    }
  },
  argTypes: {
    onChange: {
      action: "onChange",
    },
    max: {
      control: "number",
      description: "O maior valor permitido pelo slider.",
    },
    min: {
      control: "number",
      description: "O menor valor permitido pelo slider.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description: "Controla o tamanho do slider. Pode ser `small` ou `medium`.",
    },
    step: {
      control: "number",
      description: "Define o intervalo entre os valores do slider.",
    },
    marks: {
      control: "boolean",
      description:
        "Se true, exibe marcadores no slider. Pode ser configurado como um array de objetos para marcadores personalizados.",
    },
    defaultValue: {
      control: "number",
      description: "O valor inicial do slider.",
    },
    valueLabelDisplay: {
      control: { type: "select" },
      options: ["auto", "on", "off"],
      description: "Controla a exibição do rótulo de valor.",
    },
    disabled: {
      control: "boolean",
      description: "Se true, desabilita o slider.",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderDefault: Story = {
  render: Slider,
};

export const SliderDisabled: Story = {
  render: Slider,
  args: {
    disabled: true,
  },
};

export const SliderWithMarks: Story = {
  render: Slider,
  args: {
    marks: [
      { value: 0, label: "0" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 75, label: "75" },
      { value: 100, label: "100" },
    ],
  },
};

export const SliderWithValueLabel: Story = {
  render: Slider,
  args: {
    valueLabelDisplay: "on",
  },
};
