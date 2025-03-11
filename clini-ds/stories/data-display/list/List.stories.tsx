import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { List } from "./List";
import { ListItemText } from "../list-item-text/ListItemText";
import { ListItemButton } from "../list-item-button/ListItemButton";
import { ListItemIcon } from "../list-item-icon/ListItemIcon";
import { Icon } from "../icon/Icon";
import { ListSubheader } from "../list-subheader/ListSubheader";
import { Collapse } from "../../utils/collapse/Collapse";
import { ListItem } from "../list-item/ListItem";

const meta = {
  title: "dataDisplay/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("List clicked"),
  },
  argTypes: {
    onClick: { action: "List clicked" },
    color: { control: "select", options: ["primary"] },
  },
} satisfies Meta<typeof List>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
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
                draft
              </Icon>
            </ListItemIcon>

            <ListItemText primary="Rascunhos" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Icon>
                inbox
              </Icon>
            </ListItemIcon>

            <ListItemText primary="Inbox" />

            {open ? <Icon>keyboard_arrow_up</Icon> : <Icon>keyboard_arrow_down</Icon>}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Icon>
                  star
                </Icon>
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;
