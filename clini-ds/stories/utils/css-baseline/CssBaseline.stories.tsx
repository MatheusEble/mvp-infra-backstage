import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CssBaseline } from "../css-baseline/CssBaseline";
import { Container } from "../../layouts/container/Container";
import { Typography } from "../../data-display/typography/Typography";
import { Box } from "../../layouts/box/Box";
import theme from "../../utils/stylesheet/theme/Theme";

const meta: Meta<typeof CssBaseline> = {
    title: "utils/CssBaseline",
    component: CssBaseline,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCssBaseline: Story = {
    render: () => (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    CssBaseline Aplicado
                </Typography>
                <Typography variant="body1">
                    O CssBaseline do MUI normaliza estilos padrão e aplica correções para uma aparência mais consistente entre navegadores.
                </Typography>
            </Container>
        </>
    ),
};

export const CssBaselineWithBox: Story = {
    render: () => (
        <>
            <CssBaseline />
            <Box
                style={{
                    backgroundColor: theme.palette.background.default,
                    padding: theme.spacing(2),
                    color: theme.palette.text.primary,
                }}
            >
                <Typography variant="h5">Exemplo com Box</Typography>
                <Typography variant="body2">
                    O CssBaseline remove margens padrão e garante que os estilos globais do tema sejam aplicados corretamente.
                </Typography>
            </Box>
        </>
    ),
};
