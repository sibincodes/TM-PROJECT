// import "./table.css";
// const TableComponent = () => {return <table className = "content-table">
//     <thead>
//     <tr>
//         <th> Roll no</th>
//         <th>Student Name</th>
//         <th>Replied Date</th>
//         <th>Status</th>
//         <th>Acknowledgement</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//         <td>1</td>
//         <td>Hareesh</td>
//         <td>22 Jan 2022</td>
//         <td>Acknowledged</td>
//         <td>Yes</td>
//     </tr>
//     <tr>
//         <td>2</td>
//         <td>Shaun</td>
//         <td>12 Jan 2022</td>
//         <td>Acknowledged</td>
//         <td>Yes</td>
//     </tr>
//     <tr>
//         <td>3</td>
//         <td>Brenda</td>
//         <td>22 Aug 2022</td>
//         <td>Unread</td>
//         <td>N/A</td>
//     </tr>
//     <tr>
//         <td>4</td>
//         <td>Issac</td>
//         <td>1 Sept 2022</td>
//         <td>Acknowledged</td>
//         <td>Yes</td>
//     </tr>
//     <tr>
//         <td>5</td>
//         <td>Nihal</td>
//         <td>18 Oct 2022</td>
//         <td>Acknowledged</td>
//         <td>Yes</td>
//     </tr>
//     <tr>
//         <td>6</td>
//         <td>Tom</td>
//         <td>22 Jan 2022</td>
//         <td>Acknowledged</td>
//         <td>Yes</td>
//     </tr>
//     </tbody>

// </table>
//     };
// export default TableComponent;

import React from 'react'
import { useTable } from 'react-table'




  // Use the state and functions returned from useTable to build your UI

  // Render the UI for your table



const TableComponent = () =>{
    const student_data = [
        {
            'Name':'Gowri',
            'Mark':'97'
        },
        {
            'Name':'Gokul',
            'Mark':'95'
        },
        {
            'Name':'Midhun',
            'Mark':'92'
        },
        {
            'Name':'Ghanshyam',
            'Mark':'95'
        }
    ]
    const columns =   React.useMemo(
    () => [

    {
        Header: 'Name',
        columns: [
            {
            Header: 'First Name',
            accessor: 'firstName',
            },
            {
            Header: 'Last Name',
            accessor: 'lastName',
            },
        ],
        },
    ],
    []
  )

  const data = student_data;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  console.log(rows)

  return (
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup: any,index: number) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row:any, i:any) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell: any) => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default TableComponent
