import React from 'react'
import ExpenseSummaryLeftHeader from './ExpenseSummaryLeftHeader'
import ExpenseSummaryLeftBody from './ExpenseSummaryLeftBody'

function ExpenseSummaryLeft() {
    return (
        <div className='w100' style={{ marginRight: "10px" }}>
            <ExpenseSummaryLeftHeader />
            <ExpenseSummaryLeftBody />
        </div>
    )
}

export default ExpenseSummaryLeft