import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Wrapper from "../../CommonComponents/BoxWrapper/Wrapper";
import ScheduleDetailComponent from "./ScheduleDetail";
import ScheduleHeadComponent from "./ScheduleHead";
import ScheduleTableComponent from "./ScheduleTable";

const ScheduleMain = () => {
  const [selectedCell, setCell] = useState<number>(0);

  const cellHighlightHandler = (sub: any) => {
    setCell(sub.id);
  };

  const timeTable = [
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
  ];
useEffect(()=>{
  setCell(timeTable[0].id)

},[])
  const wrapperHead = <ScheduleHeadComponent />;
  const wrapperBody = [
    <ScheduleTableComponent
      selectedCell={selectedCell}
      cellHighlightHandler={cellHighlightHandler}
      timeTable={timeTable}
    />,
    <ScheduleDetailComponent detail={timeTable.filter(elem=>elem.id===selectedCell)[0]} />,
  ];
  return (
    <Box sx={{ maxWidth: "480px" }}>
      <Wrapper wrapperHead={wrapperHead} wrapperBody={wrapperBody} />
    </Box>
  );
};
export default ScheduleMain;
