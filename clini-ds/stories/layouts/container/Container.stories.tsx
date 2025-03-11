import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";
import { Box } from "../box/Box";
import theme from "../../utils/stylesheet/theme/Theme";

const meta: Meta<typeof Container> = {
    title: "layouts/Container",
    component: Container,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
    },
    argTypes: {
        disableGutters: {
            control: {
                type: "boolean"
            }
        },
        fixed: {
            control: {
                type: "boolean"
            }
        },
        maxWidth: {
            control: "select", options: ["xs", "sm", "md", "lg", "xl"]
        }

    },

};

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleContainer: Story = {
    render: (args) => (
        <Container maxWidth="md">
            <Box style={{ backgroundColor: theme.palette.primary.main, padding: "16px" }}>
                Conteúdo dentro do Container
            </Box>
        </Container>
    ),
};
