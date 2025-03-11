import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListSubheader } from "./ListSubheader";
import { Icon } from "../icon/Icon";
import { ListItemText } from "../list-item-text/ListItemText";
import { List } from "../list/List";
import { ListItemButton } from "../list-item-button/ListItemButton";
import { ListItemIcon } from "../list-item-icon/ListItemIcon";
import { ListItem } from "../list-item/ListItem";

const meta = {
  title: "dataDisplay/ListSubheader",
  component: ListSubheader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("ListSubheader clicked"),
  },
  argTypes: {
    onClick: { action: "ListSubheader clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof ListSubheader>;

export const Default: Story = {
  render: (args) => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          ListSubheader
        </ListSubheader>
      }
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon>
              send
            </Icon>
          </ListItemIcon>

          <ListItemText primary="Enviar" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon>
              star
            </Icon>
          </ListItemIcon>

          <ListItemText primary="Favoritar" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon>
              person
            </Icon>
          </ListItemIcon>

          <ListItemText primary="Perfil" />
        </ListItemButton>
      </ListItem>
    </List>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;
