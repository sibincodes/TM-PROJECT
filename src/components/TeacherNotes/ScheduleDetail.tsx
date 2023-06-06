import { Box } from "@mui/material";
import { ScheduleDetail } from "../../styles/scheduleDetail";
const subjectDetails = (key: string, value: string, task?: string[]) => {
  return (
    <div className="details__text">
      <h6>{key}</h6>
      {task ? (
        <div className="details__task">
          {task.map((elem: string) => (
            <span style={{borderColor:'#417EE3',color:"#0E0E0E",backgroundColor:"#E8F1FF"}}>{elem}</span>
          ))}
        </div>
      ) : (
        <>
          <span>-</span>
          <span>{value}</span>
        </>
      )}
    </div>
  );
};
const ScheduleDetailComponent = () => {
  return (
    <ScheduleDetail>
      <div className="detail__period">P3</div>
      <Box className="detail__desc">
        <div className="detail__subject">
          {subjectDetails("class", "V1 B")}
          {subjectDetails("class", "V1 B")}
        </div>
        <div className="detail__subject detail__subject-topic">
          {subjectDetails("class", "V1 B")}
          {subjectDetails("class", "", ["A", "B", "C"])}
        </div>
      </Box>
    </ScheduleDetail>
  );
};

export default ScheduleDetailComponent;
