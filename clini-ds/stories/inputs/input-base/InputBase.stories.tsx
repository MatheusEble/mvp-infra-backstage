import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { InputBase } from "./InputBase";
import { Paper } from "../../surfaces/paper/Paper";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { Icon } from "../../data-display/icon/Icon";
import { Divider } from "../../data-display/divider/Divider";

const meta: Meta<typeof InputBase> = {
    title: "inputs/InputBase",
    component: InputBase,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "Texto exibido quando o campo está vazio.",
        },
        disabled: {
            control: "boolean",
            description: "Desativa o input.",
        },
        fullWidth: {
            control: "boolean",
            description: "Define se o input deve ocupar toda a largura disponível.",
        },
        inputProps: {
            control: "object",
            description: "Propriedades adicionais para o elemento `<input>`.",
        },
        style: {
            control: "object",
            description: "Objeto de estilos personalizado.",
        },
    },
};

export const CustomizedInputBase: Story = {
    render: (args) => (
        <>
            <p>
                O <code>InputBase</code> é um campo de entrada minimalista do Material-UI que oferece
                alta flexibilidade para personalização. Diferente do <code>TextField</code>, ele
                não possui bordas ou estilos padrão, permitindo criar componentes customizados.
            </p>

            <h3>🔹 Exemplo: Campo de Busca</h3>
            <p>Um exemplo prático de <code>InputBase</code> com ícones e divisores.</p>

            <Paper
                component="form"
                style={{ padding: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
            >
                <IconButton style={{ padding: "10px" }} aria-label="menu">
                    <Icon>menu</Icon>
                </IconButton>
                <InputBase {...args} style={{ marginLeft: 1, flex: 1 }} />
                <IconButton type="button" style={{ padding: "10px" }} aria-label="search">
                    <Icon>search</Icon>
                </IconButton>
                <Divider style={{ height: 28, margin: 0.5 }} orientation="vertical" />
                <IconButton color="primary" style={{ padding: "10px" }} aria-label="directions">
                    <Icon>directions</Icon>
                </IconButton>
            </Paper>
        </>
    ),
    args: {
        placeholder: "Search Google Maps",
        inputProps: { "aria-label": "search google maps" },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;