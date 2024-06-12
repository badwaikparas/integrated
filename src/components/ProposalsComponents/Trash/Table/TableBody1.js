import React from 'react'
import TableRow from './TableRow'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faSignal, faFilter } from '@fortawesome/free-solid-svg-icons'

function TableBody1() {
    return (
        <>
            <div>TableBody 1</div>
            <tbody style={{ width: "100%" }}>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
        </>


    )
}

export default TableBody1;