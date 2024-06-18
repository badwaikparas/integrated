// import React from "react";
// import Table, { SelectColumnFilter } from './Table'
// import '../css/TableSection2.css'


// const getData = () => [
//   {
//     "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "staff": "John Doe",
//     "task": "Task 1",
//     "start-time": "2024-05-20T08:00:00Z",
//     "end-time": "2024-05-20T10:00:00Z",
//     "time-captured": "2024-05-20T10:05:00Z"
//   },
//   {
//     "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "staff": "Jane Smith",
//     "task": "Task 2",
//     "start-time": "2024-05-21T09:00:00Z",
//     "end-time": "2024-05-21T11:00:00Z",
//     "time-captured": "2024-05-21T11:10:00Z"
//   },
//   {
//     "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "staff": "Alice Johnson",
//     "task": "Task 3",
//     "start-time": "2024-05-22T10:00:00Z",
//     "end-time": "2024-05-22T12:00:00Z",
//     "time-captured": "2024-05-22T12:15:00Z"
//   },
//   {
//     "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "staff": "Bob Brown",
//     "task": "Task 4",
//     "start-time": "2024-05-23T11:00:00Z",
//     "end-time": "2024-05-23T13:00:00Z",
//     "time-captured": "2024-05-23T13:20:00Z"
//   },
//   {
//     "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "staff": "Charlie Davis",
//     "task": "Task 5",
//     "start-time": "2024-05-24T12:00:00Z",
//     "end-time": "2024-05-24T14:00:00Z",
//     "time-captured": "2024-05-24T14:25:00Z"
//   }
// ]


// function TableSection2() {

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "#",
//         accessor: "img",
//         Cell: ({ cell: { value } }) => <img src={value} alt="Staff" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
//       },
//       {
//         Header: "Staff",
//         accessor: "staff",
//         Filter: SelectColumnFilter,
//         filter: 'includes',  // new
//       },
//       {
//         Header: "Task",
//         accessor: "task",
//       },
//       {
//         Header: "Start Time",
//         accessor: 'start-time',
//       },
//       {
//         Header: "End Time",
//         accessor: 'end-time'
//       },
//       {
//         Header: "Time Captured",
//         accessor: 'time-captured'
//       },
//       {
//         Header: "Actions",
//         accessor: 'actions',
//       },
//     ],
//     []
//   );

//   // {
//   //   Header: "Role",
//   //   accessor: 'role',
//   //   Filter: SelectColumnFilter,
//   //   filter: 'includes',  // new
//   // },
//   const data = React.useMemo(() => getData(), []);

//   return (
//     <>
//       <div>
//         <Table columns={columns} data={data} />
//       </div>
//     </>
//   );
// }

// export default TableSection2;


import React, { useState } from "react";
import Table, { SelectColumnFilter } from './Table';
import EditDialog from "./EditDailogBox";
import '../../css/TableSection2.css';



function TableSection2() {

  const getData = [
    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "staff": "John Doe",
      "task": "Task 1",
      "start-time": "2024-05-20T08:00:00Z",
      "end-time": "2024-05-20T10:00:00Z",
      "time-captured": "2024-05-20T10:05:00Z"
    },
    {
      "id": 2,
      "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "staff": "Jane Smith",
      "task": "Task 2",
      "start-time": "2024-05-21T09:00:00Z",
      "end-time": "2024-05-21T11:00:00Z",
      "time-captured": "2024-05-21T11:10:00Z"
    },
    {
      "id": 3,
      "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "staff": "Alice Johnson",
      "task": "Task 3",
      "start-time": "2024-05-22T10:00:00Z",
      "end-time": "2024-05-22T12:00:00Z",
      "time-captured": "2024-05-22T12:15:00Z"
    },
    {
      "id": 4,
      "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "staff": "Bob Brown",
      "task": "Task 4",
      "start-time": "2024-05-23T11:00:00Z",
      "end-time": "2024-05-23T13:00:00Z",
      "time-captured": "2024-05-23T13:20:00Z"
    },
    {
      "id": 5,
      "img": "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "staff": "Charlie Davis",
      "task": "Task 5",
      "start-time": "2024-05-24T12:00:00Z",
      "end-time": "2024-05-24T14:00:00Z",
      "time-captured": "2024-05-24T14:25:00Z"
    }
  ]

  const [data, setData] = useState(getData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleEdit = (row) => {
    //console.log(row)
    setCurrentRow(row);
    setIsDialogOpen(true);
  };

  // const handleSave = (updatedRow) => {
  //   const updatedData = data.map((row) =>
  //     row.staff === updatedRow.staff ? updatedRow : row
  //   );
  //   setData(updatedData);
  //   setIsDialogOpen(false);
  // };

  const handleDelete = (row) => {
    const updatedData = data.filter(item => item.id !== row.id);
    setData(updatedData);
  };

  const handleSave = (updatedRow) => {
    //console.log(updatedRow);
    const updatedData = data.map((row) => {
      return (row.id === updatedRow.id) ? updatedRow : row;
    })
    //console.log(updatedData);
    setData(updatedData);
    // console.log(data);

    setIsDialogOpen(false);
  };
  //console.log(data);

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "img",
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="Staff" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
        )
      },
      {
        Header: "Staff",
        accessor: "staff",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Task",
        accessor: "task",
      },
      {
        Header: "Start Time",
        accessor: 'start-time',
      },
      {
        Header: "End Time",
        accessor: 'end-time'
      },
      {
        Header: "Time Captured",
        accessor: 'time-captured'
      },
      {
        Header: "Actions",
        accessor: 'actions',
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleEdit(row.original)}>Edit</button>
            <button onClick={() => handleDelete(row.original)}>Delete</button>
          </>
        )
      },
    ],
    []
  );

  return (
    <>
      <div className="table-section">
        <Table columns={columns} data={data} />
      </div>
      {currentRow && (
        <EditDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          rowData={currentRow}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default TableSection2;
