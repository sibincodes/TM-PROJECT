import { Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import { ScheduleHead } from "../../../styles/scheduleHead";

import { useEffect, useState } from "react";
import DateCalendarValue from "./ScheduleCalendar";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";


const timeTable=[
  {
    id: 2,
    period: "P1",
    start_date_time: "2023-05-22 10:00:00",
    end_date_time: "2023-05-22 11:00:00",
    attachment: [
      {
        title: "Assignment 1",
        url: "sample-image.jpg",
        type: "assignment",
      },
      {
        title: "Home work 1",
        url: "sample-image1.jpg",
        type: "homework",
      },
      {
        title: "Assignment 2",
        url: "sample-image2.jpg",
        type: "assignment",
      },
    ],
    class: "V",
    section: "A",
    subject: "Maths",
    topic: "Topic 1",
    description: "Description 1",
    status: "approved",
    task: {
      calss_work: true,
      homework: true,
      assignment: true,
    },
    approved_by: {
      id: 3,
      name: "Anni Mathew",
      email: "",
    },
    created_by: {
      id: 1,
      name: "Hema Sree",
      email: "",
    },
    created_at: "2023-05-30T05:25:01.000000Z",
    updated_at: "2023-05-30T05:25:01.000000Z",
  },
  {
    id: 1,
    period: "P2",
    start_date_time: "2023-05-22 10:00:00",
    end_date_time: "2023-05-22 11:00:00",
    attachment: [
      {
        title: "Assignment 1",
        url: "sample-image.jpg",
        type: "assignment",
      },
      {
        title: "Home work 1",
        url: "sample-image1.jpg",
        type: "homework",
      },
      {
        title: "Assignment 2",
        url: "sample-image2.jpg",
        type: "assignment",
      },
    ],
    class: "V",
    section: "A",
    subject: "Maths",
    topic: "Topic 1",
    description: "Description 1",
    status: "approved",
    task: {
      calss_work: true,
      homework: true,
      assignment: true,
    },
    approved_by: {
      id: 3,
      name: "Anni Mathew",
      email: "",
    },
    created_by: {
      id: 1,
      name: "Hema Sree",
      email: "",
    },
    created_at: "2023-05-30T05:25:01.000000Z",
    updated_at: "2023-05-30T05:25:01.000000Z",
  },
  {
    id: 3,
    period: "P3",
    start_date_time: "2023-05-22 10:00:00",
    end_date_time: "2023-05-22 11:00:00",
    attachment: [
      {
        title: "Assignment 1",
        url: "sample-image.jpg",
        type: "assignment",
      },
      {
        title: "Home work 1",
        url: "sample-image1.jpg",
        type: "homework",
      },
      {
        title: "Assignment 2",
        url: "sample-image2.jpg",
        type: "assignment",
      },
    ],
    class: "V",
    section: "A",
    subject: "Maths",
    topic: "Topic 1",
    description: "Description 1",
    status: "approved",
    task: {
      calss_work: true,
      homework: true,
      assignment: false,
    },
    approved_by: {
      id: 3,
      name: "Anni Mathew",
      email: "",
    },
    created_by: {
      id: 1,
      name: "Hema Sree",
      email: "",
    },
    created_at: "2023-05-30T05:25:01.000000Z",
    updated_at: "2023-05-30T05:25:01.000000Z",
  },
  {
    id: 4,
    period: "P4",
    start_date_time: "2023-05-22 10:00:00",
    end_date_time: "2023-05-22 11:00:00",
    attachment: [
      {
        title: "Assignment 1",
        url: "sample-image.jpg",
        type: "assignment",
      },
      {
        title: "Home work 1",
        url: "sample-image1.jpg",
        type: "homework",
      },
      {
        title: "Assignment 2",
        url: "sample-image2.jpg",
        type: "assignment",
      },
    ],
    class: "V",
    section: "A",
    subject: "Maths",
    topic: "Topic 1",
    description: "Description 1",
    status: "approved",
    task: {
      calss_work: true,
      homework: true,
      assignment: false,
    },
    approved_by: {
      id: 3,
      name: "Anni Mathew",
      email: "",
    },
    created_by: {
      id: 1,
      name: "Hema Sree",
      email: "",
    },
    created_at: "2023-05-30T05:25:01.000000Z",
    updated_at: "2023-05-30T05:25:01.000000Z",
  },


];

const ScheduleHeadComponent = ({setSchedule}:{setSchedule: React.Dispatch<React.SetStateAction<{
  id: number;
  period: string;
  start_date_time: string;
  end_date_time: string;
  attachment: {
      title: string;
      url: string;
      type: string;
  }[];
  class: string;
  section: string;
  subject: string;
  topic: string;
  description: string;
  status: string;
  task: {
    calss_work: boolean;
    homework: boolean;
    assignment: boolean;
  },
  approved_by: {
    id:number;
    name: string;
    email: string;
  },
  created_by: {
    id:number;
    name: string;
    email: string;
  },
  created_at: string;
  updated_at: string;
}[]>>}) => {
  const forwardIcon = (
    <ReactSVG
      src="/HeaderIcons/next.svg"
      onClick={() => dateSwitchHandler("next")}
    />
  );
  const backwardIcon = (
    <ReactSVG
      src="/HeaderIcons/next.svg"
      onClick={() => dateSwitchHandler("prev")}
    />
  );
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(dateFormat(new Date(), "shortDate"))
  );

  const dateSwitchHandler = (dir: string) => {
    const currentDate = new Date(dateFormat(value?.toDate(), "mmmm dd, yyyy"));
    if (dir === "next") {
      setValue(
        dayjs(
          dateFormat(
            currentDate.setDate(currentDate.getDate() + 1),
            "mmmm dd, yyyy"
          )
        )
      );
      setSchedule(timeTable)
    } else {
      setValue(
        dayjs(
          dateFormat(
            currentDate.setDate(currentDate.getDate() - 1),
            "mmmm dd, yyyy"
          )
        )
      );
      setSchedule(timeTable)
    }
  };
  const dateSelectHandler=(val?:Dayjs | null)=>{

    setOpen(prev=>!prev);
    if(val){
      setValue(val);
      setSchedule(timeTable)
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
        <span onClick={() => setOpen((prev) => !prev)}>
          {dateFormat(value?.toDate(), "mmmm dd, yyyy")}
        </span>
      </Button>
      {open && (
        <DateCalendarValue
          setOpen={setOpen}
          value={value}
          dateSelectHandler={dateSelectHandler}
        />
      )}
      <Link to="/schedule">
        <img src="/icons/schedule.png" className="head__arrow" />
      </Link>
    </ScheduleHead>
  );
};
export default ScheduleHeadComponent;
