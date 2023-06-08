import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import { ScheduleHead } from "../../../styles/scheduleHead";

const ScheduleHeadComponent = () => {
    const icons=<ReactSVG
    src="/HeaderIcons/next.svg"

  />
  return (
    <ScheduleHead>
      <h4>Schedule</h4>
      <Button
      disableRipple	
        variant="outlined"
        startIcon={
        icons  
        }
        endIcon={
     icons        }
      >
        Delete
      </Button>
      <img src="/icons/schedule.png" className="head__arrow" />
    </ScheduleHead>
  );
};
export default ScheduleHeadComponent;
