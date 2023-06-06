import { useState } from "react";

const TableComponent = ({ columns, rows }: { columns: any[]; rows: any[] }) => {
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
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
              <span>VII A</span>
              <span>Mat</span>
              </div>
 
            </td>
            <td>
            <div>
              <span>VII A</span>
              <span>Mat</span>
              </div>
 
            </td>
            <td>
            <div>
              <span>VII A</span>
              <span>Mat</span>
              </div>
 
            </td>
            <td>
            <div>
              <span>VII A</span>
              <span>Mat</span>
              </div>
 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
