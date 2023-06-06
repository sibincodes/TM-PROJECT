import React, { useState } from 'react';

interface rowDataType {
  id: number; 
  name :string;
}

interface TableRowProps {
  index: number;
  selectedRows: rowDataType[];
  handleRowClick: (index: number, rowData: rowDataType) => void;
  rowData : rowDataType;
}

const TableRow = ({ index, selectedRows, handleRowClick, rowData } : TableRowProps) => {
  const isSelected =  selectedRows.some((item) => item.id === rowData.id);


  return (
    <tr onClick={() => handleRowClick(index,rowData)} className={isSelected ? 'selected' : ''}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleRowClick(index,rowData)}
        />
      </td>
      <td>{rowData.name}</td>
    </tr>
  );
};


const Table = () => {
  const [selectedRows, setSelectedRows] = useState<rowDataType[]>([]);
  const [rowData] = useState([
    { id: 1, name: 'Item 1' },
    { id : 2, name :  'Item 2' },
    { id : 3 ,name: 'Item 3' }
  ]);
  const handleRowClick = (index: number, rowData : rowDataType) => {
    const isSelected =  selectedRows.some((item) => item.id === rowData.id);
    console.log("isSelected", isSelected);

    if (isSelected) {
      setSelectedRows(selectedRows.filter((row) => row.id !== rowData.id));
    } else {
      setSelectedRows([...selectedRows, rowData]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      {rowData.map((row, index) => (
         <TableRow key={index} index={index} selectedRows={selectedRows} handleRowClick={()=>handleRowClick(index,row)} rowData={row}
        />
      ))}
      </tbody>
    </table>
  );
};

export default Table;