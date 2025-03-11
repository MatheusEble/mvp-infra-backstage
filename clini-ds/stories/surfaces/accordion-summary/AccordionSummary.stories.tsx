import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { AccordionSummary } from "./AccordionSummary";
import { Accordion } from "../accordion/Accordion";
import { AccordionDetails } from "../accordion-details/AccordionDetails";
import { Icon } from "../../data-display/icon/Icon";

const meta = {
    title: "surfaces/AccordionSummary",
    component: AccordionSummary,
    tags: ["autodocs"],
    argTypes: {
        expandIcon: {
            control: false,
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "undefined" },
            },
        },
        className: {
            control: "text",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: `""` },
            },
        },
    },
} satisfies Meta<typeof AccordionSummary>;


export const AccordionSummaryDefault: Story = {
    render: (args) => (
        <Accordion>
            <AccordionSummary expandIcon={<Icon>arrow_drop_down</Icon>}>
                Accordion Summary
            </AccordionSummary>

            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    ),
}

export default meta;

type Story = StoryObj<typeof meta>;
