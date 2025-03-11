import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DatePickerProvider } from "./DatePickerProvider";
import { DatePicker } from "../../inputs/datepicker/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";
import "dayjs/locale/en";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const meta = {
  title: "providers/DatePickerProvider",
  component: DatePickerProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    locale: {
      control: {
        type: "select",
        options: ["pt-br", "en-us"],
        defaultValue: "pt-br",
      },
    },
    timezone: {
      control: {
        type: "select",
        options: ["America/Sao_Paulo", "UTC"],
        defaultValue: "America/Sao_Paulo",
      },
    },
  },
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const DatePickerExample = ({
  onChange,
  locale,
  timezone,
}: {
  onChange: (value: string | null) => void;
  locale: "pt-br" | "en-us";
  timezone: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs().tz(timezone).locale(locale)
  );

  useEffect(() => {
    dayjs.locale(locale);
    setSelectedDate((prev) =>
      prev ? prev.tz(timezone).locale(locale) : dayjs().tz(timezone).locale(locale)
    );
  }, [locale, timezone]);

  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
      
      onChange(newDate.toISOString());
      action("onChange")(newDate.toISOString());
    } else {
      setSelectedDate(null);
      onChange(null);
      action("onChange")("Nenhuma data selecionada");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
      <DatePicker
        label="Selecionar Data"
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{ textField: { fullWidth: true } }}
      />
      {selectedDate && (
        <p>Data selecionada: {selectedDate.locale(locale).format("L LT")}</p>
      )}
    </div>
  );
};

const localeToTimezoneMap: Record<string, string> = {
  "pt-br": "America/Sao_Paulo",
  "en-us": "UTC",
};

export const Default: Story = {
  args: {
    locale: "pt-br",
    timezone: "America/Sao_Paulo",
    children: null,
  },
  render: ({ locale = "pt-br", timezone = "America/Sao_Paulo" }) => {
    const [currentTimezone, setCurrentTimezone] = useState(timezone);

    useEffect(() => {
      setCurrentTimezone(localeToTimezoneMap[locale]);
    }, [locale]);

    return (
      <DatePickerProvider locale={locale}>
        <DatePickerExample locale={locale} timezone={currentTimezone} onChange={action("onChange")} />
      </DatePickerProvider>
    );
  },
};

export const EN: Story = {
  args: {
    locale: "en-us",
    timezone: "UTC",
    children: null,
  },
  render: ({ locale = "en-us", timezone = "UTC" }) => {
    const [currentTimezone, setCurrentTimezone] = useState(timezone);

    useEffect(() => {
      setCurrentTimezone(localeToTimezoneMap[locale]);
    }, [locale]);

    return (
      <DatePickerProvider locale={locale}>
        <DatePickerExample locale={locale} timezone={currentTimezone} onChange={action("onChange")} />
      </DatePickerProvider>
    );
  },
};
