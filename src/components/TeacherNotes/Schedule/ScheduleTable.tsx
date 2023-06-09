import { useState } from "react";
import { ScheduleTable } from "../../../styles/ScheduleTable";
import TableComponent from "../../CommonComponents/Table/TableComponents";

const ScheduleTableComponent = ({
  selectedCell,
  cellHighlightHandler,
  timeTable,
}: {
  selectedCell: number;
  cellHighlightHandler: (sub: any) => void;
  timeTable: any[];
}) => {
  const columns = timeTable.map((elem) => ({
    col: elem.period,
    colData: elem,
  }));
  const rows = timeTable.map((elem, index) =>
    elem.class.length > 0
      ? {
          col: (
            <>
              <div
                className={
                  selectedCell === elem.id ? "cell cell--border" : "cell"
                }
              >
                <span>{elem.class}</span>
                <span>{elem.subject.slice(0, 3)}</span>
              </div>
              <div
                className={
                  Object.values(elem.task).reduce((state,elem)=>{return state && elem},true)
                    ? "cell-dot"
                    : "cell-dot cell--highlight"
                }
              ></div>
            </>
          ),
          colData: elem,
        }
      : { col: <>-</>, colData: elem }
  );

  return (
    <ScheduleTable>
      <div className="table">
        <TableComponent
          columns={columns}
          rows={[
            {
              row: rows,
              rowData: "",
            },
          ]}
          callbackFn={cellHighlightHandler}
          sort={false}
        />
      </div>
    </ScheduleTable>
  );
};

export default ScheduleTableComponent;
