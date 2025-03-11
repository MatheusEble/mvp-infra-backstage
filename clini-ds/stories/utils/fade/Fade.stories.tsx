import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Fade } from "./Fade";
import { Button } from "../../inputs/button/Button";
import { Box } from "@mui/material";

const meta = {
  title: "utils/Fade",
  component: Fade,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    in: false,
  },
  argTypes: {
    in: {
      control: {
        type: "boolean",
      }
    }
  },
} satisfies Meta<typeof Fade>;

const BoxTemplate = () => (
  <Box
    sx={{
      width: 200,
      height: 200,
      bgcolor: "primary.main",
      color: "primary.contrastText",
      borderRadius: 1,
      p: 3,
    }}
  />
)

export const Default: Story = {
  args: {
    in: false,
    children: <div></div>
  },
  render: (args) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
      setShow(args.in || false);
    }, [args.in])

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button onClick={() => setShow(!show)}>
          Aparecer
        </Button>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Fade {...args} in={show}>
            {BoxTemplate()}
          </Fade>

          <Fade {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Fade>

          <Fade {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Fade>
        </div>
      </div>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
