import React from 'react'
import TableTools from './TableTools'
import TableBody1 from './TableBody1'
import TableHeader from './TableHeader'

function TableSection() {
    return (
        <div className="main-content container-fluid col-xs-12 col-md-9 col-lg-9">
            <TableTools />
            <TableHeader />
            <TableBody1 />
        </div>

    )
}

export default TableSection