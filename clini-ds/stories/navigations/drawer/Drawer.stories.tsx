import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { Box } from "@mui/material";
import { List } from "../../data-display/list/List";
import { ListItem } from "../../data-display/list-item/ListItem";
import { ListItemButton } from "../../data-display/list-item-button/ListItemButton";
import { ListItemIcon } from "../../data-display/list-item-icon/ListItemIcon";
import { Icon } from "../../data-display/icon/Icon";
import { ListItemText } from "../../data-display/list-item-text/ListItemText";
import { Divider } from "../../data-display/divider/Divider";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "navigations/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    type Anchor = "top" | "left" | "bottom" | "right";

    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
              (event as React.KeyboardEvent).key === "Shift")
          ) {
            return;
          }

          setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    {index % 2 === 0 ? "inbox" : "mail"}
                  </Icon>
                </ListItemIcon>

                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    {index % 2 === 0 ? "inbox" : "mail"}
                  </Icon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <div>
        {(["left", "right", "top", "bottom"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {anchor}
            </Button>

            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
