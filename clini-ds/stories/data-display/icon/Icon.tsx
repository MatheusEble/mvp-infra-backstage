import React from "react";

import MUIIcon, { IconProps as MUIIconProps } from "@mui/material/Icon";

interface IconProps extends MUIIconProps {
  overwriteDefaultFilledIconsToOutlined?: boolean;
  children: string | React.ReactNode;
  filled?: boolean;
  style?: React.CSSProperties;
}

export const Icon = ({ overwriteDefaultFilledIconsToOutlined, filled, children, style, ...props }: IconProps) => {
  const iconIsString = typeof children === "string";

  let hasOutlineInIconName = false;

  if (iconIsString) {
    hasOutlineInIconName = children.includes("outline");
  }

  const defaultFilledIcons = ["label", "folder", "check_box", "lens"];

  let classNameIcon = "material-symbols-outlined";

  let isUsingOldMaterialIcons = iconIsString && (hasOutlineInIconName || defaultFilledIcons.includes(children)) && !overwriteDefaultFilledIconsToOutlined;

  if (iconIsString) {
    if (["pix", "whatsapp", "copy"].includes(children)) {
      classNameIcon = "material-icons-outlined";
    } else if (isUsingOldMaterialIcons) {
      classNameIcon = "material-icons";
    }
  }

  let iconStyle = {
    fontSize: style?.fontSize || "20px",
    display: "initial",
    fontVariationSettings: isUsingOldMaterialIcons
      ? undefined
      : `"FILL" ${filled ? 1 : 0}, "wght" 400, "GRAD" 0, "opsz" 24`,
    ...style,
  };

  return (
    <MUIIcon
      fontSize={"small"}
      baseClassName={classNameIcon + " " + (props.className || "")}
      style={iconStyle}
      {...props}
    >
      {children}
    </MUIIcon>
  )
};