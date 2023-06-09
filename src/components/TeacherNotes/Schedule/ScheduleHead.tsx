import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import { ScheduleHead } from "../../../styles/scheduleHead";

import { useState } from "react";
import DateCalendarValue from "./ScheduleCalendar";
import dayjs, { Dayjs } from "dayjs";

const ScheduleHeadComponent = () => {
  const icons = <ReactSVG src="/HeaderIcons/next.svg" />;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <ScheduleHead>
      <h4>Schedule</h4>

      <Button
        className="schedule__button"
        disableRipple
        variant="outlined"
        startIcon={icons}
        endIcon={icons}
      >
        <span onClick={() => setOpen((prev) => !prev)}>Date</span>
      </Button>
      {open && <DateCalendarValue setOpen={setOpen} value={value} setValue={setValue}/>}
      <img src="/icons/schedule.png" className="head__arrow" />
    </ScheduleHead>
  );
};
export default ScheduleHeadComponent;
