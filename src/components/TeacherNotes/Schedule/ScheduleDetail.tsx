import { Box } from "@mui/material";
import { ScheduleDetail } from "../../../styles/scheduleDetail";
const subjectDetails = (
  key: string,
  value: string,
  task?: { status: string; task: string }[]
) => {
  return (
    <div className="details__text">
      <h6>{key}</h6>
      {task ? (
        <div className="details__task">
          {task.map((elem: { status: string; task: string }) => (
            <span
              className={
                !elem.status ? "details__task-pending" : "details__task-ontime"
              }
            >
              {elem.task}
            </span>
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
const ScheduleDetailComponent = ({ detail }: { detail: any }) => {
  // Object.keys(detail?.task).map(elem=>({task:elem,status:detail?.task[elem]}))

  return (
    
      detail&&
      <ScheduleDetail>
      <div className="detail__period">{detail?.period}</div>
      <Box className="detail__desc">
        <div className="detail__subject">
          {subjectDetails("Class", detail?.class)}
          {subjectDetails("Subject", detail?.subject)}
        </div>
        <div className="detail__subject detail__subject-topic">
          {subjectDetails("class", "V1 B")}
          {subjectDetails(
            "Tasks",
            "",
            Object.keys(detail.task).map((elem) => ({
              task: elem.charAt(0).toUpperCase(),
              status: detail.task[elem],
            }))
          )}
        </div>
      </Box>
    </ScheduleDetail>
  )
};

export default ScheduleDetailComponent;
