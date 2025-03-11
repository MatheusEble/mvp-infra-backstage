import React from "react";
import { ThemeProvider } from "./theme-provider/ThemeProvider";
import { SnackbarProvider } from "./snackbar-provider/SnackbarProvider";
import { DatePickerProvider } from "./datepicker-provider/DatePickerProvider";
interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider>
    <SnackbarProvider>
      <DatePickerProvider>
          {children}
      </DatePickerProvider>
    </SnackbarProvider>
  </ThemeProvider>
);