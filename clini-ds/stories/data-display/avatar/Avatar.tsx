import React from "react";

import MUIAvatar, { AvatarProps } from "@mui/material/Avatar";
import { AvatarSizes } from "./AvatarSizes";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarStorybookProps extends AvatarProps {
    size?: AvatarSize;
};

export const Avatar: React.FC<AvatarStorybookProps> = ({ size = "md", style = {}, ...props }) => {
    const sizeStyle = AvatarSizes[size];

    return <MUIAvatar {...props} sx={{ ...sizeStyle, ...style }} />;
};
