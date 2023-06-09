import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function DateCalendarValue({
  setOpen,
  value,
  setValue
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: dayjs.Dayjs | null,
  setValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}) {

  return (
    <div className="schedule__calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setOpen((prev) => !prev);
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
