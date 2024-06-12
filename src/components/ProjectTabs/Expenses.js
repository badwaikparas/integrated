import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
    return (
        <div style={{ padding: '20px' }}>
            <ExpenseItem
                title="EXP-2"
                description="AAAAA"
                amount="₹2,000.00"
                category="Wateen Load"
                date="03.06.2024"
            />
        </div>
    );
};

export default Expenses;


// import React from 'react';
// import ExpenseItem from './ExpenseItem';

// const Expenses = () => {
//     return (
//         <div style={{ padding: '20px' }}>
//             <ExpenseItem
//                 title="EXP-2"
//                 description="AAAAA"
//                 amount="₹2,000.00"
//                 category="Wateen Load"
//                 date="03.06.2024"
//             />
//         </div>
//     );
// };

// export default Expenses;
