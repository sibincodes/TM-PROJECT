import { useState } from "react";

const TableComponent = ({ columns, rows:{rows},callbackFn}: { columns: any[]; rows: {rows:any[]} ;callbackFn:(sub:any,index:number)=>void}) => {
  interface RowData {
    id: number;
    name: string;
    age: number;
  }
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowId: number
  ) => {
    if (event.target.checked) {
      setCheckedRows([...checkedRows, rowId]);
    } else {
      setCheckedRows(checkedRows.filter((id) => id !== rowId));
    }
  };

  const getCheckedRowsData = () => {
    const checkedRowData: RowData[] = checkedRows.map((rowId) => {
      // Retrieve the data for the checked row based on the rowId
      // Replace the following example with your actual data retrieval logic
      return {
        id: rowId,
        name: `Name ${rowId}`,
        age: rowId * 10,
      };
    });

    console.log(checkedRowData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col:any,index:number)=> <th onClick={()=>callbackFn(col,index)}>{col}</th>)}
     
          </tr>
        </thead>
        <tbody>
          {rows.map(row=>
          <tr>
            {row.map((column:any,index:number)=><td onClick={()=>callbackFn(column,index)}>{column}</td>)}
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
