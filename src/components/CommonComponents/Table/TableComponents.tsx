import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

const TableComponent = ({
  columns,
  rows: { rows },
  callbackFn,
  sort
}: {
  columns: any[];
  rows: { rows: any[] };
  callbackFn: (sub: any, index: number) => void;
  sort:boolean
}) => {
  interface RowData {
    id: number;
    name: string;
    age: number;
  }
  const [selectedRows, setSelectedRows] = useState<{
    [index: number]: boolean;
  }>({});
  const [allSelected,setAllSelected]=useState(false);
  useEffect(() => {
    rows.map((elem, index) => {
      setSelectedRows((prev) => ({ ...prev, [index]: false }));
    });
  }, []);

  const handleRowClick = (index?: number, rowData?: any) => {
    if (index?.toString()) setSelectedRows((prev) => ({ ...prev, [index]: !prev[index] }))
    

    else{
      rows.map((elem, index) => {
      console.log(allSelected)
      setSelectedRows((prev) => ({ ...prev, [index]: !allSelected }));
    });
    setAllSelected(prev=>!prev)
  }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
           {sort &&
           <th>
           <Checkbox
           checked={allSelected}
           onChange={()=>{
             
             handleRowClick();
           }}
             icon={<ReactSVG src="/icons/checkbox.svg" />}
             checkedIcon={<ReactSVG src="/icons/checkbox-tick.svg" />}
           />
         </th>
           } 
            {columns.map((col: any, index: number) => (
              <th onClick={() => callbackFn(col, index)}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              onClick={() => handleRowClick(index, row)}
              className={
                selectedRows[index] ? "row--selected" : "row--unselected"
              }
            >
              <>
                {" "}
                {sort && <td>
                  <Checkbox
                    checked={selectedRows[index] || false}
                    icon={<ReactSVG src="/icons/checkbox.svg" />}
                    checkedIcon={<ReactSVG src="/icons/checkbox-tick.svg" />}
                  />
                </td>}
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
