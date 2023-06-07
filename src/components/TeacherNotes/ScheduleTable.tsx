import { ScheduleTable } from "../../styles/ScheduleTable";
import TableComponent from "../CommonComponents/Table/TableComponents";

const ScheduleTableComponent = () => {
  const timeTable = [
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
    { period: "P1", class: "VII A", subject: "Mathematics" },
  ];
  const columns=timeTable.filter(elem=>elem.period);
  const rows=timeTable.map(elem=><><span>{elem.class}</span><span>{elem.subject}</span></>)
  return <ScheduleTable><TableComponent columns={columns} rows={rows} /></ScheduleTable>;
};

export default ScheduleTableComponent;
