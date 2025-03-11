
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";
import theme from "../../utils/stylesheet/theme/Theme";

const meta: Meta<typeof Box> = {
    title: "layouts/Box",
    component: Box,
    tags: ["autodocs"],
    argTypes: {
        style: {
            control: {
                type: "object"
            },
            description: "Aceita estilos inline para ajustes rápidos."
        },
        component: {
            control: {
                type: "text"
            },
            description: "Define qual elemento HTML o Box deve renderizar (ex: \`div\`, \`section\`, \`article\`)."
        }
    },
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
O **Box** é um componente fundamental de layout que funciona como um contêiner flexível para estruturar elementos na interface. 
Ele atua como um **div** por padrão, mas pode ser renderizado como qualquer outro elemento HTML utilizando a prop \`component\`.

Além disso, ele suporta estilização direta via \`sx\`, \`style\` e classes CSS, sendo amplamente utilizado para criar espaçamentos, 
ajustar tamanhos e aplicar temas.

### **Exemplo Simples**
\`\`\`tsx
<Box component="section" style={{ padding: 2, border: "1px dashed grey" }}>
    Este Box renderiza como um elemento section.
</Box>
\`\`\`
                `,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BoxBasic: Story = {
    render: () => (
        <Box component="section" style={{ padding: 2, border: "1px dashed grey" }}>
            Este Box renderiza como um elemento section.
        </Box>
    )
};

export const CustomizedBasic: Story = {
    render: () => (
        <Box
            style={{
                width: 100,
                height: 100,
                borderRadius: 1,
                backgroundColor: theme.palette.primary.main,
            }}
        />
    )
};
