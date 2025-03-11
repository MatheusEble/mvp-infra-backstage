import React from "react";
import { Box, Button } from "@mui/material";
import { ClickAwayListener } from "./ClickAwayListener";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import theme from "../../utils/stylesheet/theme/Theme";

type ClickAwayListenerArgs = {
  onClick: (event: React.MouseEvent) => void;
  onClickAway: (event: Event) => void;
};

export default {
  title: "utils/ClickAwayListener",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn() as ClickAwayListenerArgs["onClick"],
    onClickAway: fn() as ClickAwayListenerArgs["onClickAway"],
  },
} satisfies Meta<ClickAwayListenerArgs>;

export const Default: StoryObj<ClickAwayListenerArgs> = {
  render: ({ onClick, onClickAway }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = (event: React.MouseEvent) => {
      setOpen((prev) => !prev);
      onClick(event);
    };

    const handleClickAway = (event: Event) => {
      setOpen(false);
      onClickAway(event);
    };  

    return (
      <div style={{ height: 150 }}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box style={{ position: "relative" }}>
            <Button variant="contained" onClick={handleClick}>
              Open menu dropdown
            </Button>
            {open ? (
                <div style={{
                position: "absolute",
                top: "100%",
                left: 0,
                zIndex: 1,
                border: "1px solid",
                borderColor: theme.palette.grayPure,
                padding: 4,
                borderRadius: 2,
                background: "background.paper"
                }}>
                Click me, I will stay visible until you click outside.
                </div>
            ) : null}
          </Box>
        </ClickAwayListener>
      </div>
    );
  },
};
