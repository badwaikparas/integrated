import React from 'react'
import ExpenseSummaryLeft from './ExpenseSummaryLeft'
import ExpensesSummaryRight from './ExpensesSummaryRight'
function ExpenseSummary() {
  return (
    <>
      <div className='flex' style={{ alignItems: "flex-start", height: '100vh' }}>
        <ExpenseSummaryLeft />
        <ExpensesSummaryRight />
      </div>
    </>
  )
}

export default ExpenseSummary