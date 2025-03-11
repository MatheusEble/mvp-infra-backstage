import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup } from "./AvatarGroup";
import { Avatar } from "../avatar/Avatar";

const users = [
    { id: 1, name: "A", src: "https://example.com/avatar1.png" },
    { id: 2, name: "B", src: "https://example.com/avatar2.png" },
    { id: 3, name: "C", src: "https://example.com/avatar3.png" },
    { id: 4, name: "D", src: "https://example.com/avatar4.png" },
    { id: 5, name: "E", src: "https://example.com/avatar5.png" },
];

const meta: Meta<typeof AvatarGroup> = {
    title: "dataDisplay/AvatarGroup",
    component: AvatarGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        max: 3,
        total: 5
    },
    argTypes: {
        max: {
            control: {
                type: "range",
                min: 1,
                max: 5,
                step: 1,
            },
            description: "Define o número máximo de avatares exibidos antes de mostrar um avatar adicional indicando o número de avatares excedentes.",
            table: {
                type: { summary: "number" },
            },
        },
        spacing: {
            control: {},
            description: `Controla o espaçamento entre os avatares no grupo. Pode ser "small", "medium" ou um valor numérico representando o espaçamento em pixels.`,
        },
        total: {
            control: {
                type: "number",
            },
            description: "Especifica o número total de avatares, incluindo os que não estão visíveis. Útil para paginar ou carregar avatares dinamicamente.",
            table: {
                type: { summary: "number" },
            },
        },
        renderSurplus: {
            control: false,
            description: `Função que permite personalizar a renderização do avatar que indica o número de avatares excedentes quando o número de avatares excede o valor definido na propriedade "max".`,
            table: {
                type: { summary: "(surplus: number) => React.ReactNode" },
            },
        },
        slots: {
            description: `Objeto que permite substituir os componentes padrão usados internamente no AvatarGroup. Atualmente, você pode substituir o slot "surplus".`,
            table: {
                type: { summary: "{ surplus?: React.ElementType }" },
            },
        },
    },
};

const CustomSurplus: React.FC<{ surplus: number; size?: "sm" | "md" | "lg" | "xl" }> = ({ surplus, size = "md" }) => {

    return (
        <Avatar>
            +{surplus}
        </Avatar>
    );
};

export const AvatarGroupDefault: Story = {
    render: (args) => {

        return (
            <AvatarGroup
            >
                {users.map((user) => (
                    <Avatar key={user.id} alt={user.name} src={user.src} />
                ))}
            </AvatarGroup>
        );
    },
};

export const AvatarGroupSurplus: Story = {
    render: (args) => {
        const avatarSize = "md";

        return (
            <AvatarGroup
                {...args}
                style={{ alignItems: "center" }}
                renderSurplus={(surplus) => <CustomSurplus surplus={surplus} size={avatarSize} />}
            >
                {users.map((user) => (
                    <Avatar key={user.id} alt={user.name} src={user.src} />
                ))}
            </AvatarGroup>
        );
    },
};

export const AvatarGroupSlots: Story = {
    render: (args) => (

        <AvatarGroup
            {...args}
            max={4}
            slots={{
                surplus: CustomSurplus,
            }}
        >
            {users.map((user) => (
                <Avatar key={user.id} alt={user.name} src={user.src} />
            ))}
        </AvatarGroup>
    ),
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;
