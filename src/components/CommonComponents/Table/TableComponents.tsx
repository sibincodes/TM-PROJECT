import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

const TableComponent = ({
  columns,
  rows,
  callbackFn,
  sort,
}: {
  columns: any[];
  rows:any[];
  callbackFn?: (sub: any) => void;
  sort: boolean;
}) => {
  interface RowData {
    id: number;
    name: string;
    age: number;
  }
  const [selectedRows, setSelectedRows] = useState<{
    [index: number]: boolean;
  }>({});
  const [allSelected, setAllSelected] = useState(false);
  useEffect(() => {
    rows.map((elem, index) => {
      setSelectedRows((prev) => ({ ...prev, [elem.rowData.id]: false }));
    });
  }, []);

  const handleRowClick = (index?: number, rowData?: any) => {
    if (index?.toString())
      setSelectedRows((prev) => ({ ...prev, [rowData.id]: !prev[rowData.id] }));
    else {
      rows.map((elem, index) => {
        setSelectedRows((prev) => ({ ...prev, [elem.rowData.id]: !allSelected }));
      });
      setAllSelected((prev) => !prev);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {sort && (
              <th>
                <Checkbox
                  checked={allSelected}
                  onChange={() => {
                    handleRowClick();
                  }}
                  icon={<ReactSVG src="/icons/checkbox.svg" />}
                  checkedIcon={<ReactSVG src="/icons/checkbox-tick.svg" />}
                />
              </th>
            )}
            {columns.map((col: any, index: number) => (
              <th onClick={() =>callbackFn && callbackFn(col.colData)}>{col.col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              className={
                selectedRows[row.rowData.id] ? "row--selected" : "row--unselected"
              }
            >
              <>
                {" "}
                {sort && (
                  <td>
                    <Checkbox
                      onChange={() => handleRowClick(index, row.rowData)}
                      checked={selectedRows[row.rowData.id] || false}
                      icon={<ReactSVG src="/icons/checkbox.svg" />}
                      checkedIcon={<ReactSVG src="/icons/checkbox-tick.svg" />}
                    />
                  </td>
                )}
                {row.row.map((column: any) => (
                  <td onClick={() => callbackFn && callbackFn(column.colData)}>{column.col}</td>
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
