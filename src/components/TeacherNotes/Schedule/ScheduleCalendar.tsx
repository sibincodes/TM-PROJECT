import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";

export default function DateCalendarValue({
  setOpen,
dateSelectHandler,
value
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: dayjs.Dayjs | null
  dateSelectHandler: (val?: Dayjs | null) => void
}) {

  return (
    <div className="schedule__calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => {
            dateSelectHandler(newValue)
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
