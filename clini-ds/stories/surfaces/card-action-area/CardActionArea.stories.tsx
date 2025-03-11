import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CardActionArea, CardActionAreaProps } from "./CardActionArea";
import { CardContent } from "../card-content/CardContent";
import { CardMedia } from "../card-media/CardMedia";
import { Card } from "../card/Card";
import { Typography } from "../../data-display/typography/Typography";
import { fn } from "@storybook/test";
import theme from "../../utils/stylesheet/theme/Theme";

export default {
  title: "surfaces/CardActionArea",
  component: CardActionArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} as Meta<CardActionAreaProps>;

export const Default: StoryFn<CardActionAreaProps> = (args) => (
  <Card>
    <CardActionArea onClick={args.onClick} style={{ width: 340, textAlign: "center" }}>
      <CardMedia
        component="img"
        style={{ height: 160 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" style={{ color: theme.palette.navalDark }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);



