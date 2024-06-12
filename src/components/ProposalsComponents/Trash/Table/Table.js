import React from 'react'
import TableHeader from './TableHeader'
import TableBody1 from '../TableBody1'

function Table() {
    return (
        <div style={{ background: "white" }}>
            <div>
                <table>
                    <TableHeader />
                    <TableBody1 />
                </table>
            </div>
        </div>
    )
}

export default Table