import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { AccordionActions } from "./AccordionActions";
import { Button } from "../../inputs/button/Button";
import { AccordionDetails } from "../accordion-details/AccordionDetails";
import { Accordion } from "../accordion/Accordion";
import { AccordionSummary } from "../accordion-summary/AccordionSummary";

const meta = {
    title: "surfaces/AccordionActions",
    component: AccordionActions,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        className: "",
        disableSpacing: false
    },
    argTypes: {
        className: {
            control: "text",
            description: "Classe CSS personalizada para estilização do componente.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: `""` },
            },
        },
        disableSpacing: {
            control: "boolean",
            description: "Se verdadeiro, desabilita o espaçamento entre os botões.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        }
    },
} satisfies Meta<typeof AccordionActions>;

export const AccordionActionsDefault: Story = {
    render: (args) => (
        <Accordion defaultExpanded>
            <AccordionSummary>
                Acordion Summary 1
            </AccordionSummary>

            <AccordionDetails>
                O componente <strong>AccordionActions</strong> é utilizado dentro de um
                <strong> Accordion</strong> para exibir ações relacionadas ao conteúdo expandido.
                Normalmente, é posicionado na parte inferior do componente e contém botões ou
                outros elementos interativos, como opções de confirmação ou cancelamento.
            </AccordionDetails>

            <AccordionActions {...args}>
                <Button>
                    Action 1
                </Button>

                <Button>
                    Action 2
                </Button>
            </AccordionActions>
        </Accordion>
    ),
};

export default meta;

type Story = StoryObj<typeof meta>;
