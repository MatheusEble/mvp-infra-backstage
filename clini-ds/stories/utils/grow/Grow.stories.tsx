import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Grow } from "./Grow";
import { Button } from "../../inputs/button/Button";
import { Box } from "@mui/material";

const meta = {
  title: "utils/Grow",
  component: Grow,
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
} satisfies Meta<typeof Grow>;

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
          <Grow {...args} in={show}>
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
          </Grow>

          <Grow {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
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
          </Grow>

          <Grow {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
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
          </Grow>
        </div>
      </div>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
