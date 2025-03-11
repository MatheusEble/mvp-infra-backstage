import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FilledInput } from "../filled-input/FilledInput";
import { InputLabel } from "../input-label/InputLabel";
import { InputAdornment } from "./InputAdornment";

const meta: Meta<typeof InputAdornment> = {
    title: "inputs/InputAdornment",
    component: InputAdornment,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        position: {
            control: "select",
            options: ["start", "end"],
            description: "Define a posição do adornment no input (início ou fim)."
        },
        variant: {
            control: "select",
            options: ["filled", "outlined", "standard"],
            description: "Define o estilo do input."
        },
        disableTypography: {
            control: "boolean",
            description: "Desativa a estilização tipográfica padrão do adornment."
        },
        disablePointerEvents: {
            control: "boolean",
            description: "Desativa eventos de ponteiro (útil para adornos puramente visuais)."
        }
    }
};
export const BasicInputAdornment: Story = {
    render: (args) => (
        <>
            <p>
                O <code>InputAdornment</code> é um componente utilizado para adicionar elementos visuais dentro de um campo de input.
                Ele pode ser usado para incluir:
            </p>
            <ul>
                <li><strong>Prefixo</strong>: antes do texto digitado, como "R$" para valores monetários.</li>
                <li><strong>Sufixo</strong>: depois do texto digitado, como "kg" para peso.</li>
                <li><strong>Ações</strong>: botões interativos, como um ícone de olho para mostrar/ocultar senha.</li>
            </ul>

            <h3>🔹 Exemplo: Adicionando um Prefixo (startAdornment)</h3>
            <InputLabel htmlFor="adornment-amount">Valor</InputLabel>
            <FilledInput
                id="adornment-amount"
                startAdornment={<InputAdornment position="start" >R$</InputAdornment>}
            />

            <h3>🔹 Exemplo: Adicionando um Sufixo (endAdornment)</h3>
            <InputLabel htmlFor="adornment-weight">Peso</InputLabel>
            <FilledInput
                id="adornment-weight"
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            />
        </>
    )
};

export default meta;

type Story = StoryObj<typeof meta>;
