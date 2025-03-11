import React, { useState } from "react";
import { BottomNavigation } from "./BottomNavigation";
import type { Meta, StoryObj } from "@storybook/react";

import { BottomNavigationAction } from "../bottom-navigation-action/BottomNavigationAction";
import { Icon } from "../../data-display/icon/Icon";

const meta: Meta<typeof BottomNavigation> = {
    title: "navigations/BottomNavigation",
    component: BottomNavigation,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        showLabels: true,
        onChange: () => { },
        value: 0,
    },
    argTypes: {
        showLabels: {
            control: { type: "boolean" },
        },
        value: {
            control: { type: "number" },
        }
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBottomNavigation: Story = {
    render: (args) => {
        const [value, setValue] = useState(0);

        return (
            <>
                <p>Bottom Navigation Action"s: </p>

                <BottomNavigation
                    {...args}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<Icon>history</Icon>} />
                    <BottomNavigationAction label="Favorites" icon={<Icon>star</Icon>} />
                    <BottomNavigationAction label="Nearby" icon={<Icon>location_on</Icon>} />
                </BottomNavigation>
            </>
        )
    },
};

export const LabelBottomNavigation = {
    render: () => {
        const [value, setValue] = useState("recents");

        const handleChange = (event: React.SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };

        return (
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<Icon>history</Icon>}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<Icon>star</Icon>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<Icon>location_on</Icon>}
                />
                <BottomNavigationAction />
            </BottomNavigation>
        );
    }
}