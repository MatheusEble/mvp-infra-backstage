import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Popper } from "./Popper";
import { Fade } from "../fade/Fade";
import { Paper, PopperPlacementType, Typography } from "@mui/material";
import { Grid2 } from "../../layouts/grid2/Grid2";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "utils/Popper",
  component: Popper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Popper>;

export const Default: Story = {
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();

    const handleClick =
      (newPlacement: PopperPlacementType) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
          setOpen((prev) => placement !== newPlacement || !prev);
          setPlacement(newPlacement);
        };

    return (
      <div style={{ width: 500 }}>
        <Popper
          sx={{ zIndex: 1200 }}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>

        <Grid2 container sx={{ justifyContent: "center" }}>
          <Grid2>
            <Button onClick={handleClick("top-start")}>top-start</Button>
            <Button onClick={handleClick("top")}>top</Button>
            <Button onClick={handleClick("top-end")}>top-end</Button>
          </Grid2>
        </Grid2>

        <Grid2 container sx={{ justifyContent: "center" }}>
          <Grid2 size={6}>
            <Button onClick={handleClick("left-start")}>left-start</Button>

            <br />

            <Button onClick={handleClick("left")}>left</Button>

            <br />

            <Button onClick={handleClick("left-end")}>left-end</Button>
          </Grid2>

          <Grid2
            container
            size={6}
            direction="column"
            sx={{ alignItems: "flex-end" }}
          >
            <Grid2>
              <Button onClick={handleClick("right-start")}>right-start</Button>
            </Grid2>
            <Grid2>
              <Button onClick={handleClick("right")}>right</Button>
            </Grid2>
            <Grid2>
              <Button onClick={handleClick("right-end")}>right-end</Button>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 container sx={{ justifyContent: "center" }}>
          <Grid2>
            <Button onClick={handleClick("bottom-start")}>bottom-start</Button>
            <Button onClick={handleClick("bottom")}>bottom</Button>
            <Button onClick={handleClick("bottom-end")}>bottom-end</Button>
          </Grid2>
        </Grid2>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
