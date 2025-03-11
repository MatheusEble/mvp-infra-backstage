import React, { useEffect, useRef, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Slide } from "./Slide";
import { Button } from "../../inputs/button/Button";
import { Box } from "@mui/material";

const meta = {
  title: "utils/Slide",
  component: Slide,
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
} satisfies Meta<typeof Slide>;

const BoxTemplate = () => {
  return (
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
}

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

        <div style={{ display: "flex", alignItems: "center", gap: 4, position: "relative" }}>
          <Slide direction="up" {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="up" {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="up" {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>
        </div>
      </div>
    )
  },
};

export const DownDirection: Story = {
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
          <Slide direction="down" {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="down" {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="down" {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>
        </div>
      </div>
    )
  },
};

export const LeftDirection: Story = {
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
          <Slide direction="left" {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="left" {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="left" {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>
        </div>
      </div>
    )
  },
};

export const RightDirection: Story = {
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
          <Slide direction="right" {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="right" {...(show ? { timeout: 1000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>

          <Slide direction="right" {...(show ? { timeout: 2000 } : {})} {...args} in={show}>
            {BoxTemplate()}
          </Slide>
        </div>
      </div>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
