import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Zoom } from "./Zoom";
import { Button } from "../../inputs/button/Button";
import { Box } from "@mui/material";

const meta = {
  title: "utils/Zoom",
  component: Zoom,
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
} satisfies Meta<typeof Zoom>;

export const Default: Story = {
  args: {
    in: false,
    children: <div></div>
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      setShow(args.in || false);
    }, [args.in]);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button onClick={() => setShow(!show)}>
          Aparecer
        </Button>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Zoom {...args} in={show}>
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
          </Zoom>

          <Zoom {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
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
          </Zoom>

          <Zoom {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
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
          </Zoom>
        </div>
      </div>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
