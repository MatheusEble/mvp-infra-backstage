import React, { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/pt-br";
import "dayjs/locale/en";

dayjs.extend(utc);
dayjs.extend(timezone);
interface DatePickerProviderProps {
  locale?: "pt-br" | "en-us";
  timezone?: string;
  children: React.ReactNode;
}

export const DatePickerProvider = ({
  locale = "pt-br",
  timezone = "America/Sao_Paulo",
  children,
}: DatePickerProviderProps) => {
  
  const dayjsLocale = locale === "en-us" ? "en" : "pt-br";

  useEffect(() => {
    dayjs.locale(dayjsLocale);
    dayjs.tz.setDefault(timezone);
  }, [dayjsLocale, timezone]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocale}>
      {children}
    </LocalizationProvider>
  );
};
