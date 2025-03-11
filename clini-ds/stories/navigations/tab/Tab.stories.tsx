import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from "./Tab";
import { Icon } from "../../data-display/icon/Icon";

const meta: Meta<typeof Tab> = {
    title: "navigations/Tab",
    component: Tab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Tab One",
        wrapped: false,
        iconPosition: "top",
        disabled: false,
    },
    argTypes: {
        label: {
            type: "string",
        },
        wrapped: {
            type: "boolean",
        },
        iconPosition: {
            control: "select", options: ["top", "bottom", "start", "end"]
        },
        disabled: {
            type: "boolean",
        },
        value: {
            type: undefined,
        }
    },
};

export const BasicTab: Story = {
    render: (args) => {
        return (
            <>
                <Tab {...args} label="Cadastro" />
                <Tab {...args} label="Orçamentos" />
                <Tab {...args} label="Financeiro" />
            </>
        );
    }
};

export const IconsTab: Story = {
    render: (args) => {
        return (
            <>
                <Tab {...args} label="Cadastro" icon={<Icon>person</Icon>} />
                <Tab {...args} label="Orçamentos" icon={<Icon>paid</Icon>} />
                <Tab {...args} label="Financeiro" icon={<Icon>finance</Icon>} />
            </>
        );
    }
};

export default meta;

type Story = StoryObj<typeof meta>;