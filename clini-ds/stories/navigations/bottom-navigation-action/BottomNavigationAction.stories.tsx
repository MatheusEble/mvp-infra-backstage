import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { BottomNavigationAction } from "./BottomNavigationAction";
import { Icon } from "../../data-display/icon/Icon";

const meta: Meta<typeof BottomNavigationAction> = {
    title: "navigations/BottomNavigationAction",
    component: BottomNavigationAction,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Label",
        showLabel: true
    },
    argTypes: {
        label: {
            control: { type: "text" },
        },
        icon: {
            control: { type: "object" }
        },
        showLabel: {
            control: { type: "boolean" },
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return (
            <>
                <BottomNavigationAction {...args} icon={<Icon>history</Icon>} />
                <BottomNavigationAction {...args} icon={<Icon>star</Icon>} />
                <BottomNavigationAction {...args} icon={<Icon>location_on</Icon>} />
            </>
        )
    }
};
