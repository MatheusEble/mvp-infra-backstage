import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { AccordionSummary } from "../accordion-summary/AccordionSummary";
import { AccordionDetails } from "../accordion-details/AccordionDetails";

const meta = {
    title: "surfaces/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    args: {
        disabled: false,
        disableGutters: false,
        defaultExpanded: false,
        onChange: action("expanded/collapsed"),
    },
    argTypes: {
        defaultExpanded: {
            control: "boolean",
            description: "Se verdadeiro, expande o componente por padrão.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        disabled: {
            control: "boolean",
            description: "Se verdadeiro, desabilita o componente.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        disableGutters: {
            control: "boolean",
            description: "Se verdadeiro, remove a margem entre dois itens expandidos.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        expanded: {
            control: "boolean",
            description: "Se verdadeiro, expande o componente. Torna o componente controlado.",
            table: {
                type: { summary: "boolean" },
            },
        },
        onChange: {
            action: "expanded/collapsed",
            description: "Chamado quando o estado do componente muda.",
            table: {
                type: { summary: "(event: React.SyntheticEvent, expanded: boolean) => void" },
            },
        },
    },
} satisfies Meta<typeof Accordion>;

export const AccordionDefault: Story = {
    render: (args) => (
        <>
            <Accordion {...args}>
                <AccordionSummary>
                    Accordion Summary 1
                </AccordionSummary>

                <AccordionDetails>
                    According Details content

                    <br />

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget
                </AccordionDetails>
            </Accordion>

            <Accordion {...args}>
                <AccordionSummary>
                    Accordion Summary 2
                </AccordionSummary>

                <AccordionDetails>
                    According Details content

                    <br />

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget
                </AccordionDetails>
            </Accordion>
        </>
    ),
};

export default meta;

type Story = StoryObj<typeof meta>;
