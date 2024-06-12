import React from "react";
import Table, { SelectColumnFilter } from './Table'
import '../../css/TableSection2.css'


const getData = () => [
  {
    "purchases": "Laptop",
    "billed-date": "2024-05-01",
    "due-date": "2024-06-01",
    "status": "Paid",
    "amount": "$1200",
    "created-by": "John Doe"
  },
  {
    "purchases": "Office Chair",
    "billed-date": "2024-05-03",
    "due-date": "2024-06-03",
    "status": "Unpaid",
    "amount": "$250",
    "created-by": "Jane Smith"
  },
  {
    "purchases": "Monitor",
    "billed-date": "2024-05-05",
    "due-date": "2024-06-05",
    "status": "Paid",
    "amount": "$300",
    "created-by": "Alice Johnson"
  },
  {
    "purchases": "Keyboard",
    "billed-date": "2024-05-07",
    "due-date": "2024-06-07",
    "status": "Pending",
    "amount": "$100",
    "created-by": "Robert Brown"
  },
  {
    "purchases": "Mouse",
    "billed-date": "2024-05-09",
    "due-date": "2024-06-09",
    "status": "Unpaid",
    "amount": "$50",
    "created-by": "Emily Davis"
  },
  {
    "purchases": "Desk Lamp",
    "billed-date": "2024-05-11",
    "due-date": "2024-06-11",
    "status": "Paid",
    "amount": "$75",
    "created-by": "Michael Wilson"
  },
  {
    "purchases": "Headphones",
    "billed-date": "2024-05-13",
    "due-date": "2024-06-13",
    "status": "Pending",
    "amount": "$150",
    "created-by": "Sarah Miller"
  },
  {
    "purchases": "Webcam",
    "billed-date": "2024-05-15",
    "due-date": "2024-06-15",
    "status": "Unpaid",
    "amount": "$80",
    "created-by": "David Martinez"
  },
  {
    "purchases": "Printer",
    "billed-date": "2024-05-17",
    "due-date": "2024-06-17",
    "status": "Paid",
    "amount": "$200",
    "created-by": "Laura Garcia"
  },
  {
    "purchases": "Router",
    "billed-date": "2024-05-19",
    "due-date": "2024-06-19",
    "status": "Pending",
    "amount": "$120",
    "created-by": "Daniel Hernandez"
  }
]

function TableSection2() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Purchases",
        accessor: "purchases",
      },
      {
        Header: "Billed Date",
        accessor: "billed-date",
      },
      {
        Header: "	Due Date",
        accessor: "due-date",
      },
      {
        Header: "	Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: 'includes'
      },
      {
        Header: "	Amount",
        accessor: "amount",
      },
      {
        Header: "	Created by",
        accessor: "created-by",
      }
      // {
      //   Header: "Role",
      //   accessor: 'role',
      //   Filter: SelectColumnFilter,
      //   filter: 'includes',  // new
      // },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="table-section">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default TableSection2;