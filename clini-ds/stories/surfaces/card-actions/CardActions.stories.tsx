import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CardMedia } from "../card-media/CardMedia";
import { CardActions } from "./CardActions";
import { Button } from "../../inputs/button/Button";
import { Card } from "../card/Card";
import { CardContent } from "../card-content/CardContent";
import { Typography } from "../../data-display/typography/Typography";
import { fn } from "@storybook/test";
import theme from "../../utils/stylesheet/theme/Theme";

const meta: Meta<typeof CardActions> = {
  title: "surfaces/CardActions",
  component: CardActions,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
};

export const Default: StoryFn<typeof CardActions> = (args) => (
  <Card style={{ maxWidth: 345 }}>
    <CardMedia
      style={{ height: 140 }}
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" style={{ color: theme.palette.navalDark }}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions {...args}>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default meta;

