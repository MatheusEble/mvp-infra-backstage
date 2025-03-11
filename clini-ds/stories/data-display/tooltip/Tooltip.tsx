import React from "react";

import MUITooltip, { TooltipProps } from "@mui/material/Tooltip";

export const Tooltip = (props: TooltipProps) => (<MUITooltip arrow {...props} />);