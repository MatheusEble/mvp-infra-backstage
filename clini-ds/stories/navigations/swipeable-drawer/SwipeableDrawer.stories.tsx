import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@mui/material";

import { SwipeableDrawer } from "./SwipeableDrawer";
import { List } from "../../data-display/list/List";
import { ListItem } from "../../data-display/list-item/ListItem";
import { ListItemButton } from "../../data-display/list-item-button/ListItemButton";
import { ListItemIcon } from "../../data-display/list-item-icon/ListItemIcon";
import { Icon } from "../../data-display/icon/Icon";
import { ListItemText } from "../../data-display/list-item-text/ListItemText";
import { Divider } from "../../data-display/divider/Divider";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "navigations/SwipeableDrawer",
  component: SwipeableDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SwipeableDrawer>;

export const Default: Story = {
  render: (args) => {
    const [drawerAnchor, setDrawerAnchor] = useState({
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
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
              (event as React.KeyboardEvent).key === "Shift")
          ) {
            return;
          }

          setDrawerAnchor({ ...drawerAnchor, [anchor]: open });
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
        <p>
          Ele é parecido com o Drawer, porem a diferença é que esse é mais responsivo,
          sendo possível abrir e fechar o drawer arrastando ele com o dedo.
        </p>

        {(["left", "right", "top", "bottom"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {anchor}
            </Button>

            <SwipeableDrawer
              anchor={anchor}
              open={drawerAnchor[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
