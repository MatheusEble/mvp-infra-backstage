import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import StyledRating from "./StyledRating";
import { action } from "@storybook/addon-actions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
  title: "inputs/StyledRating",
  component: StyledRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Valor da avaliação, de 0 a 5",
      defaultValue: 2,
      table: {
        type: { summary: "number" },
      },
    },
    onChange: {
      action: "changed",
      description: "Função chamada quando o valor é alterado",
    },
    precision: {
      control: { type: "number", min: 0.5, max: 1, step: 0.1 },
      description: "Precisão do valor, para 0.5 ou 1 de intervalo",
      defaultValue: 0.5,
    },
    icon: {
      description: "Ícone para o rating preenchido",
      defaultValue: <FavoriteIcon fontSize="inherit" />,
    },
    emptyIcon: {
      description: "Ícone para o rating vazio",
      defaultValue: <FavoriteBorderIcon fontSize="inherit" />,
    },
  },
} satisfies Meta<typeof StyledRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: StyledRating,
  args: {
    value: 2,
    onChange: action("onChange"),
    precision: 0.5,
    icon: <Icon filled fontSize="inherit">favorite</Icon>,
    emptyIcon: <Icon fontSize="inherit">favorite</Icon>,
  },
};

export const NoValue: Story = {
  render: StyledRating,
  args: {
    value: null,
    onChange: action("onChange"),
    precision: 0.5,
    icon: <Icon filled fontSize="inherit">favorite</Icon>,
    emptyIcon: <Icon fontSize="inherit">favorite</Icon>,
  },
};

export const CustomPrecision: Story = {
  render: StyledRating,
  args: {
    value: 3,
    onChange: action("onChange"),
    precision: 0.1,
    icon: <Icon filled fontSize="inherit">favorite</Icon>,
    emptyIcon: <Icon fontSize="inherit">favorite</Icon>,
  },
};
