import React from "react";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "../../utils/css-baseline/CssBaseline";

import theme from "../../utils/stylesheet/theme/Theme";

export const ThemeProvider = (props: any) => (
  <MUIThemeProvider theme={theme} {...props}>
    <CssBaseline />

    {props.children}
  </MUIThemeProvider>
);