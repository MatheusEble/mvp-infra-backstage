import React from "react";

import MUIImageList, { ImageListProps } from "@mui/material/ImageList";

export const ImageList: React.FC<ImageListProps> = ({ style, ...props }) => <MUIImageList {...props} />