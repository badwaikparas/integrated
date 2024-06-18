// import { useState } from "react";
// // import ReactDOM from "react-dom";
// import Board, { moveCard } from "@asseinfo/react-kanban";
// import "@asseinfo/react-kanban/dist/styles.css";
// // Use your own styles to override the default styles
// // import "./styles.css";

// const board = {
//     columns: [
//         {
//             id: 1,
//             title: "Backlog",
//             backgroundColor: "#fff",
//             cards: [
//                 {
//                     id: 1,
//                     title: "Card title 1",
//                     description: "Card content"
//                 },
//                 {
//                     id: 2,
//                     title: "Card title 2",
//                     description: "Card content"
//                 },
//                 {
//                     id: 3,
//                     title: "Card title 3",
//                     description: "Card content"
//                 }
//             ]
//         },
//         {
//             id: 2,
//             title: "Doing",
//             cards: [
//                 {
//                     id: 9,
//                     title: "Card title 9",
//                     description: "Card content"
//                 }
//             ]
//         },
//         {
//             id: 3,
//             title: "Q&A",
//             cards: [
//                 {
//                     id: 10,
//                     title: "Card title 10",
//                     description: "Card content"
//                 },
//                 {
//                     id: 11,
//                     title: "Card title 11",
//                     description: "Card content"
//                 }
//             ]
//         },
//         {
//             id: 4,
//             title: "Production",
//             cards: [
//                 {
//                     id: 12,
//                     title: "Card title 12",
//                     description: "Card content"
//                 },
//                 {
//                     id: 13,
//                     title: "Card title 13",
//                     description: "Card content"
//                 }
//             ]
//         }
//     ]
// };

// function ControlledBoard() {
//     // You need to control the state yourself.
//     const [controlledBoard, setBoard] = useState(board);

//     function handleCardMove(_card, source, destination) {
//         const updatedBoard = moveCard(controlledBoard, source, destination);
//         setBoard(updatedBoard);
//     }

//     return (
//         <Board onCardDragEnd={handleCardMove} disableColumnDrag>
//             {controlledBoard}
//         </Board>
//     );
// }

// // function UncontrolledBoard() {
// //     return (
// //         <Board
// //             allowRemoveLane
// //             allowRenameColumn
// //             allowRemoveCard
// //             onLaneRemove={console.log}
// //             onCardRemove={console.log}
// //             onLaneRename={console.log}
// //             initialBoard={board}
// //             allowAddCard={{ on: "top" }}
// //             onNewCardConfirm={(draftCard) => ({
// //                 id: new Date().getTime(),
// //                 ...draftCard
// //             })}
// //             onCardNew={console.log}
// //         />
// //     );
// // }

// export default function LeadsBody() {
//     return (
//         <>
//             {/* <h4>Example of an uncontrolled board</h4>
//             <UncontrolledBoard />
//             <h4>Example of a controlled board</h4>
//             <p>Just the card moving is implemented in this demo.</p>
//             <p>
//                 In this kind of board, you can do whatever you want. We just mirror your
//                 board state.
//             </p> */}
//             <ControlledBoard />
//         </>
//     );
// }


import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import * as React from 'react';
import '../../../css/App.css'
// import '../App.css';

function App() {
    let data = [
        { Id: 1, Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Nancy Davloio', RankId: 1 },
        { Id: 2, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2 },
        { Id: 3, Status: 'Testing', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: '3.5', Assignee: 'Steven walker', RankId: 1 },
        { Id: 4, Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.', Type: 'Others', Priority: 'Low', Tags: 'Meeting', Estimate: 2, Assignee: 'Michael Suyama', RankId: 1 },
        { Id: 5, Status: 'Validate', Summary: 'Validate new requirements', Type: 'Improvement', Priority: 'Low', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert King', RankId: 1 }
    ];
    return (
        <div className="App">
            <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
                <ColumnsDirective>
                    <ColumnDirective headerText="To Do" keyField="Open" />
                    <ColumnDirective headerText="In Progress" keyField="InProgress" />
                    <ColumnDirective headerText="Testing" keyField="Testing" />
                    <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
}

export default App;
