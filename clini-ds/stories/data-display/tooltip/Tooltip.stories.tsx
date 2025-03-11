import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../../inputs/button/Button";
import { ClickAwayListener } from "@mui/material";
import { Grid2 } from "../../layouts/grid2/Grid2";

const meta = {
  title: "dataDisplay/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <>
      <Grid2 container sx={{ justifyContent: "center" }}>
        <Grid2>
          <Tooltip title="Add" placement="top-start">
            <Button>
              top-start
            </Button>
          </Tooltip>

          <Tooltip title="Add" placement="top">
            <Button>
              top
            </Button>
          </Tooltip>

          <Tooltip title="Add" placement="top-end">
            <Button>
              top-end
            </Button>
          </Tooltip>
        </Grid2>
      </Grid2>

      <Grid2 container sx={{ justifyContent: "center" }}>
        <Grid2 size={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>
              left-start
            </Button>
          </Tooltip>

          <br />

          <Tooltip title="Add" placement="left">
            <Button>
              left
            </Button>
          </Tooltip>

          <br />

          <Tooltip title="Add" placement="left-end">
            <Button>
              left-end
            </Button>
          </Tooltip>
        </Grid2>

        <Grid2
          container
          size={6}
          direction="column"
          sx={{ alignItems: "flex-end" }}
        >
          <Grid2>
            <Tooltip title="Add" placement="right-start">
              <Button>
                right-start
              </Button>
            </Tooltip>
          </Grid2>

          <Grid2>
            <Tooltip title="Add" placement="right">
              <Button>
                right
              </Button>
            </Tooltip>
          </Grid2>

          <Grid2>
            <Tooltip title="Add" placement="right-end">
              <Button>
                right-end
              </Button>
            </Tooltip>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 container sx={{ justifyContent: "center" }}>
        <Grid2>
          <Tooltip title="Add" placement="bottom-start">
            <Button>
              bottom-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>
              bottom
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button>
              bottom-end
            </Button>
          </Tooltip>
        </Grid2>
      </Grid2>
    </>
  ),
};

export const MaxWidth: Story = {
  render: (args) => {
    return (
      <div>
        <Tooltip
          placement="top"
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
        >
          <div>
            Esse é o width/largura máxima que o tooltip possuí
          </div>
        </Tooltip>
      </div>
    )
  }
}

export const Triggers: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return (
      <div>
        <Grid2 container sx={{ justifyContent: "center" }}>
          <Grid2>
            <Tooltip disableFocusListener title="Add">
              <Button>
                Hover or touch
              </Button>
            </Tooltip>
          </Grid2>

          <Grid2>
            <Tooltip disableHoverListener title="Add">
              <Button>
                Focus or touch
              </Button>
            </Tooltip>
          </Grid2>

          <Grid2>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>
                Hover
              </Button>
            </Tooltip>
          </Grid2>

          <Grid2>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                  slotProps={{
                    popper: {
                      disablePortal: true,
                    },
                  }}
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid2>
        </Grid2>
      </div>
    );
  }
}

export default meta;

type Story = StoryObj<typeof meta>;
