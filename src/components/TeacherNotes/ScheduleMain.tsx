import { Box } from "@mui/material";
import { useState } from "react";
import Wrapper from "../CommonComponents/BoxWrapper/Wrapper";
import ScheduleDetailComponent from "./ScheduleDetail";
import ScheduleHeadComponent from "./ScheduleHead";
import ScheduleTableComponent from "./ScheduleTable";

const ScheduleMain = () => {
  const [selectedCell, setCell] = useState(0);

  const cellHighlightHandler = (sub: any, index: number) => {
    console.log(sub);
    setCell(index);
  };

  const timeTable = [
    { period: "P1", class: "VII A", subject: "Maths" },
    { period: "P2", class: "", subject: "" },
    { period: "P3", class: "VII A", subject: "Mathematics" },
    { period: "P4", class: "", subject: "" },
    { period: "P5", class: "", subject: "" },
    { period: "P6", class: "VII A", subject: "Mathematics" },
    { period: "P7", class: "VII A", subject: "Mathematics" },
    { period: "P8", class: "VII A", subject: "Mathematics" },
    
  ];

  const wrapperHead = <ScheduleHeadComponent />;
  const wrapperBody = [
    <ScheduleTableComponent
      selectedCell={selectedCell}
      cellHighlightHandler={cellHighlightHandler}
      timeTable={timeTable}
    />,
    <ScheduleDetailComponent detail={timeTable[selectedCell]}/>,
  ];
  return (
    <Box sx={{ maxWidth: "480px" }}>
      <Wrapper wrapperHead={wrapperHead} wrapperBody={wrapperBody} />
    </Box>
  );
};
export default ScheduleMain;
