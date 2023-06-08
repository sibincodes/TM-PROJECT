import { Checkbox } from "@mui/material";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const TableComponent = ({
  columns,
  rows: { rows },
  callbackFn,
}: {
  columns: any[];
  rows: { rows: any[] };
  callbackFn: (sub: any, index: number) => void;
}) => {
  interface RowData {
    id: number;
    name: string;
    age: number;
  }
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const handleRowClick = (index: number, rowData: any) => {
    const isSelected = selectedRows.some((item) => item.id === rowData.id);
    console.log("isSelected", isSelected);

    if (isSelected) {
      setSelectedRows(selectedRows.filter((row) => row.id !== rowData.id));
    } else {
      setSelectedRows([...selectedRows, rowData]);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
            <Checkbox
 icon={<ReactSVG src="/icons/checkbox.svg" />}
 checkedIcon={<ReactSVG src="/icons/checkbox-tick.svg" />}
      />
  
            </th>
            {columns.map((col: any, index: number) => (
              <th onClick={() => callbackFn(col, index)}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr onClick={() => handleRowClick(index, row)}>
              <>
                {" "}
                <td>
                <Checkbox
 icon={<ReactSVG src="/icons/checkbox.svg" />}
 checkedIcon={<ReactSVG src="/icons/checkbox-tick.svg" />}
      />
                </td>
                {row.map((column: any, index: number) => (
                  <td onClick={() => callbackFn(column, index)}>{column}</td>
                ))}
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
