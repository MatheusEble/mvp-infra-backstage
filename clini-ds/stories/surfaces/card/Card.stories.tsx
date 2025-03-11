import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, CardProps } from "./Card";
import { Button } from "../../inputs/button/Button";
import { Collapse } from "../../utils/collapse/Collapse";
import { CardContent } from "../card-content/CardContent";
import { CardActions } from "../card-actions/CardActions";
import { CardMedia } from "../card-media/CardMedia";
import { CardActionArea } from "../card-action-area/CardActionArea";
import { Box } from "../../layouts/box/Box";
import { Typography } from "../../data-display/typography/Typography";
import theme from "../../utils/stylesheet/theme/Theme";

export default {
  title: "surfaces/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select", options: ["outlined", "elevation"]
    },
  },
} as Meta<CardProps>;

const bull = (
  <Box
    component="span"
    style={{ display: "inline-block", margin: "2px 4px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Template: StoryFn<CardProps> = (args) => (
  <Card style={{ width: 340, textAlign: "center" }} {...args}>
    <CardContent>
      <Typography gutterBottom style={{ color: theme.palette.supportPure, fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography style={{ color: theme.palette.supportLight, marginBottom: 13 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {"a benevolent smile"}
      </Typography>
    </CardContent>
  </Card>
);

export const Basics = Template.bind({});
Basics.args = {
  variant: "elevation",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Expandable: StoryFn<CardProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card style={{ width: 340 }}>
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
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </CardActions>
      <Collapse in={isExpanded}>
        <CardContent>
          <Typography paragraph>
            This is additional information about the lizard. When expanded, this
            text will be visible.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export const ActiveStateStyles: StoryFn<CardProps> = () => {
  const cards = [
    {
      id: 1,
      title: "Plants",
      description: "Plants are essential for all life.",
    },
    {
      id: 2,
      title: "Animals",
      description: "Animals are a part of nature.",
    },
    {
      id: 3,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
    },
  ];

  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            style={{
              height: "100%",
              backgroundColor: selectedCard === index ? theme.palette.action.selected : "inherit",
            }}
          >
            <CardContent style={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

