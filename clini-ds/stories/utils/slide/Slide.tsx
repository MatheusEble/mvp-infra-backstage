import React from "react";

import MUISlide, { SlideProps } from "@mui/material/Slide";

export const Slide = ({ mountOnEnter = true, unmountOnExit = true, ...props }: SlideProps) => (
  <MUISlide
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    {...props}
  />
);