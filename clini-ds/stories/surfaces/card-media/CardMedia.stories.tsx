import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CardMedia, CardMediaProps } from "./CardMedia";
import { CardContent } from "../card-content/CardContent";
import theme from "../../utils/stylesheet/theme/Theme";
import { Typography } from "../../data-display/typography/Typography";

export default {
  title: "surfaces/CardMedia",
  component: CardMedia,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta<CardMediaProps>;

export const Template: StoryFn<CardMediaProps> = (args) => (
  <CardMedia style={{ width: 340, textAlign: "center" }} {...args}>
    <CardMedia
      component="img"
      style={{ height: "160px" }}
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
    {args.children}
  </CardMedia>
);



