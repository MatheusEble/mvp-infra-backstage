import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../avatar/Avatar";
import { ListItemAvatar } from "./ListItemAvatar";
import { Icon } from "../icon/Icon";
import { Divider } from "../divider/Divider";
import { List } from "../list/List";
import { ListItem } from "../list-item/ListItem";
import { ListItemText } from "../list-item-text/ListItemText";
import { Typography } from "../typography/Typography";

const meta = {
  title: "dataDisplay/ListItemAvatar",
  component: ListItemAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListItemAvatar>;

export const Default: Story = {
  render: (args) => (
    <List>
      <ListItem>
        <ListItemAvatar  {...args}>
          <Avatar>
            <Icon>
              person
            </Icon>
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="Perfil" secondary="Jul 20, 2014" />
      </ListItem>

      <ListItem>
        <ListItemAvatar {...args}>
          <Avatar>
            <Icon>
              settings
            </Icon>
          </Avatar>

        </ListItemAvatar>

        <ListItemText primary="Configurações" />
      </ListItem>
    </List>
  )
};

export const More: Story = {
  render: (args) => (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Ali Connors
              </Typography>
              {" — I`ll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I`m out of town this…"}
            </>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </>
          }
        />
      </ListItem>
    </List>
  )
};

export default meta;

type Story = StoryObj<typeof meta>;
