import React from "react";
import MUIToggleButtonGroup, { ToggleButtonGroupProps } from "@mui/material/ToggleButtonGroup";

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = (props) => (
    <MUIToggleButtonGroup {...props}>
        {props.children}
    </MUIToggleButtonGroup>
);