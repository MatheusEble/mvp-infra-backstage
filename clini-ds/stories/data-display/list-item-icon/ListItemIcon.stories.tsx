import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { List } from "../list/List";
import { Icon } from "../icon/Icon";
import { ListItemIcon } from "./ListItemIcon";
import { ListItemText } from "../list-item-text/ListItemText";
import { ListItemButton } from "../list-item-button/ListItemButton";

const meta = {
  title: "dataDisplay/ListItemIcon",
  component: ListItemIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("ListItemIcon clicked"),
  },
  argTypes: {
    onClick: { action: "ListItemIcon clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof ListItemIcon>;

export const Default: Story = {
  render: (args) => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <Icon>
            star
          </Icon>
        </ListItemIcon>

        <ListItemText primary="Line item 1" />
      </ListItemButton>
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;
