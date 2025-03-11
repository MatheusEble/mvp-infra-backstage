import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { AccordionDetails } from "./AccordionDetails";

const meta = {
  title: "surfaces/AccordionDetails",
  component: AccordionDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    className: "",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Classe CSS personalizada para estilização do componente.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
} satisfies Meta<typeof AccordionDetails>;

export const AccordionDetailsDefault: Story = {
  args: {
    className: "",
  },
  render: (args) => (
    <AccordionDetails {...args}>
      O <strong>AccordionDetails</strong> é um componente utilizado dentro de um <strong>Accordion</strong> para exibir o conteúdo expandido. Ele serve como o corpo do Accordion, onde informações podem ser colocadas.
    </AccordionDetails>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;
