import React from "react";

import { SnackbarProvider as MUISnackbarProvider, SnackbarProviderProps, useSnackbar } from "notistack";

export const SnackbarProvider = (props: SnackbarProviderProps) => (<MUISnackbarProvider {...props} />);