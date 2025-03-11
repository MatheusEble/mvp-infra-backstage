import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../../inputs/button/Button";
import { Typography } from "../../data-display/typography/Typography";
import { Divider } from "../../data-display/divider/Divider";

const meta: Meta<typeof Popover> = {
  title: "utils/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    query: "(max-width: 600px)",
  },
  argTypes: {
    query: {
      control: "text",
      description: "Define a media query a ser testada. Exemplo: `(max-width: 600px)`",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = ({ anchorOrigin }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {anchorOrigin.vertical} {anchorOrigin.horizontal}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
          ...anchorOrigin
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

export const Default: Story = {
  render: (args) => <Template anchorOrigin={{ vertical: "bottom", horizontal: "left" }} />
};

export const AnchorOrigin: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "2rem" }}>
      <div style={{ display: "grid", gap: "2rem" }}>
        top
        <Template anchorOrigin={{ vertical: "top", horizontal: "right" }} />
        <Template anchorOrigin={{ vertical: "top", horizontal: "center" }} />
        <Template anchorOrigin={{ vertical: "top", horizontal: "left" }} />
      </div>

      <Divider />

      <div style={{ display: "grid", gap: "2rem" }}>
        center
        <Template anchorOrigin={{ vertical: "center", horizontal: "right" }} />
        <Template anchorOrigin={{ vertical: "center", horizontal: "center" }} />
        <Template anchorOrigin={{ vertical: "center", horizontal: "left" }} />
      </div>

      <Divider />

      <div style={{ display: "grid", gap: "2rem" }}>
        bottom
        <Template anchorOrigin={{ vertical: "bottom", horizontal: "right" }} />
        <Template anchorOrigin={{ vertical: "bottom", horizontal: "center" }} />
        <Template anchorOrigin={{ vertical: "bottom", horizontal: "left" }} />
      </div>
    </div>
  )
};

export const Hover: Story = {
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <div>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Hover with a Popover.
        </Typography>

        <Popover
          id="mouse-over-popover"
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        </Popover>
      </div>
    );
  }
};