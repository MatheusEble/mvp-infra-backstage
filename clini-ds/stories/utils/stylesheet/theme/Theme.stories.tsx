import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { useTheme } from "../../useTheme";

const meta = {
  title: "utils/theme",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta;

export const Colors: Story = {
  render: () => {
    const theme = useTheme();

    const palettes = [
      { color: "primary" },
      { color: "success" },
      { color: "danger" },
      { color: "warning" },
      { color: "info" },
      { color: "blush" },
      { color: "cosmos" },
      { color: "naval" },
      { color: "support" },
    ];

    const renderColors = (color: string) => (
      ["UltraLight", "Lightest", "Lighter", "Light", "Pure", "Dark", "Darker", "Darkest"].map((shade: string) => (
        <div
          key={shade}
          style={{
            background: (theme.palette as any)[color + shade],
            padding: "10px",
            color: ["Pure", "Dark", "Darker", "Darkest"].includes(shade) ? theme.palette.primary.contrastText : undefined,
          }}
        >
          {color + shade}
        </div>
      ))
    );

    const renderPalette = (color: string) => {
      return (
        <div>
          <h3>{color}</h3>
          {renderColors(color)}
        </div>
      )
    }

    return (
      <div style={{ display: "flex", transform: "scale(0.7)" }}>
        {palettes.map((palette) => (renderPalette(palette.color)))}

        <div style={{ width: "max-content" }}>
          <h3>profileColor</h3>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} style={{ background: (theme.palette as any)[`profileColor${i}`], padding: "10px" }}>{`profileColor${i}`}</div>
          ))}
        </div>
      </div>
    )
  }
};

export const Shadows: Story = {
  render: () => {
    return (
      <div>
        <h3>Shadows</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 50 }}>
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} style={{ boxShadow: useTheme().shadows[i], padding: "10px", borderRadius: "8px" }}>{`shadow${i}`}</div>
          ))}
        </div>
      </div>
    )
  }
}

export const BorderRadius: Story = {
  render: () => {
    return (
      <div>
        <h3>BorderRadius</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 50 }}>
          {Object.entries(useTheme().borderRadius).map(([key, value]) => (
            <div key={key} style={{ borderRadius: value, padding: "10px", border: "1px solid black" }}>{key}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default meta;

type Story = StoryObj<typeof meta>;