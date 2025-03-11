import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CardHeader, CardHeaderProps } from "./CardHeader";
import { CardMedia } from "../card-media/CardMedia";
import { Card } from "../card/Card";
import { Avatar } from "../../data-display/avatar/Avatar";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { CardContent } from "../card-content/CardContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import theme from "../../utils/stylesheet/theme/Theme";
import { Typography } from "../../data-display/typography/Typography";

export default {
  title: "surfaces/CardHeader",
  component: CardHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta<CardHeaderProps>;

export const Template: StoryFn<CardHeaderProps> = () => {
  return (
    <Card style={{ width: 340 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">L</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lizard"
        subheader="September 14, 2024"
      />
      <CardMedia
        component="img"
        style={{ height: "160px" }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" style={{ color: theme.palette.navalDark }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
    </Card>
  );
};