import React from 'react'
import TableRow from './TableRow'
import TableHead from './TableHead'
import TableFooter from './TableFooter/TableFooter'

function Table() {
    return (
        <>

            <md-content ng-show="!proposalsLoader" className="bg-white _md" aria-hidden="false" style={{}}>
                <md-table-container ng-show="proposals.length > 0" aria-hidden="false" className="" style={{}}>
                    <table md-table="" md-progress="promise" className="md-table ng-isolate-scope">
                        <TableHead />
                        <tbody md-body="" className="md-body">
                            <TableRow />
                            <TableRow />
                            <TableRow />
                        </tbody>
                    </table>
                </md-table-container>
                <TableFooter />
                <md-content ng-show="!proposals.length" className="md-padding no-item-data _md ng-hide" aria-hidden="true" style={{}}>No matching items found</md-content>
            </md-content>
        </>
    )
}

export default Table