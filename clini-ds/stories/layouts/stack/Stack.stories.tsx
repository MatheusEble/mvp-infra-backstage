import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../box/Box";
import { Paper } from "../../surfaces/paper/Paper";
import { Stack } from "./Stack";
import { styled } from "@mui/material/styles";

const meta: Meta<typeof Stack> = {
    title: "Layouts/Stack",
    component: Stack,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "O **Stack** é um componente de layout flexível que organiza elementos em uma única direção (horizontal ou vertical) com espaçamento uniforme entre eles. Ele simplifica a construção de layouts responsivos e alinhados, utilizando `display: flex` internamente.",
            },
        },
    },
    args: {
        spacing: 2,
    },
    argTypes: {
        direction: {
            control: "select",
            options: ["row", "row-reverse", "column", "column-reverse"],
            description: "Define a direção dos itens no Stack.",
            table: {
                type: { summary: "row | row-reverse | column | column-reverse" },
                defaultValue: { summary: "column" },
            },
        },
        spacing: {
            control: "number",
            description: "Define o espaçamento entre os itens.",
            table: {
                type: { summary: "number" },
            },
        },
        divider: {
            description: "Define um elemento que será inserido entre cada item do Stack. Pode ser um componente ou um elemento JSX.",
            table: {
                type: { summary: "React.ReactNode" },
            },
        },
        style: {
            control: "object",
            description: "Estilização personalizada do componente.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.white,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.supportPure,
    }),
}));

export const BasicStack: Story = {
    render: (args) => (
        <Box style={{ width: "100%" }}>
            <Stack {...args}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </Box>
    ),
};

export const RowStack: Story = {
    args: {
        direction: "row",
        spacing: 2,
    },
    render: (args) => (
        <Box style={{ width: "100%" }}>
            <Stack {...args}>
                <Item>Item A</Item>
                <Item>Item B</Item>
                <Item>Item C</Item>
            </Stack>
        </Box>
    ),
};
