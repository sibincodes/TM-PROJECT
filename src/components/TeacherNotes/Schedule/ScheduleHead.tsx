import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import { ScheduleHead } from "../../../styles/scheduleHead";

import { useEffect, useState } from "react";
import DateCalendarValue from "./ScheduleCalendar";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';

const ScheduleHeadComponent = () => {
  const forwardIcon = <ReactSVG src="/HeaderIcons/next.svg" onClick={()=>dateSwitchHandler("next")} />;
  const backwardIcon=<ReactSVG src="/HeaderIcons/next.svg" onClick={()=>dateSwitchHandler("prev")}/>;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs(dateFormat(new Date(),'shortDate')));

  const dateSwitchHandler=(dir:string)=>{
const currentDate=new Date(dateFormat(value?.toDate(), "mmmm dd, yyyy"));
if(dir==="next"){
  setValue(dayjs(dateFormat(currentDate.setDate(currentDate.getDate() + 1), "mmmm dd, yyyy")));

}
else{
  setValue(dayjs(dateFormat(currentDate.setDate(currentDate.getDate() - 1), "mmmm dd, yyyy")));

}

  }
  return (
    <ScheduleHead>
      <h4>Schedule</h4>

      <Button
        className="schedule__button"
        disableRipple
        variant="outlined"
        startIcon={backwardIcon}
        endIcon={forwardIcon}
      >
        <span onClick={() => setOpen((prev) => !prev)}>{dateFormat(value?.toDate(), "mmmm dd, yyyy")}</span>
      </Button>
      {open && (
        <DateCalendarValue
          setOpen={setOpen}
          value={value}
          setValue={setValue}
        />
      )}
      <Link to="/schedule">
        <img src="/icons/schedule.png" className="head__arrow" />
      </Link>
    </ScheduleHead>
  );
};
export default ScheduleHeadComponent;
