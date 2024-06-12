// // import React from 'react'
// // import img from '../assets/img/nofiles.jpg'
// // import '../css/TaskDescription.css'

// // function TaskDescription() {
// //     return (
// //         <div class="container">
// //             <div class="left-side">
// //                 <div>
// //                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// //                         <div class="task-title">TASK-7 Demo Test</div>
// //                         <button> </button>
// //                     </div>
// //                     <div class="description">
// //                         <div><b>Description</b></div>
// //                         <div class="small">DEMO Task</div>
// //                     </div>
// //                     <div class="subtasks">
// //                         <div className='subtask-head'>Sub Tasks: 0 subtasks</div>
// //                         <div>0 of 0 (NaN%) subtasks complete.</div>
// //                     </div>
// //                 </div>
// //                 <div class="subtasks-list">
// //                     <input type="text" placeholder='Write a new task and hit enter...' />
// //                     <div class="subtask-item">
// //                         <div>subtask</div>
// //                         <button></button>
// //                         <button></button>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div class="right-side">
// //                 <div class="right-side-title">Information</div>
// //                 <div class="information-grid">
// //                     <div>
// //                         <div>Related</div>
// //                         <button class="button"> Project</button>
// //                     </div>
// //                     <div>
// //                         <div>Status</div>
// //                         <div>Open</div>
// //                     </div>
// //                     <div>
// //                         <div>Start Date</div>
// //                         <div>01.06.2024</div>
// //                     </div>
// //                     <div>
// //                         <div>Due Date</div>
// //                         <div>01.07.2024</div>
// //                     </div>
// //                     <div>
// //                         <div>Priority</div>
// //                         <div>High</div>
// //                     </div>
// //                     <div>
// //                         <div>Billable</div>
// //                         <div>unbillable</div>
// //                     </div>
// //                     <div>
// //                         <div>Assigned By:</div>
// //                         <div>Demo 123</div>
// //                     </div>
// //                     <div>
// //                         <div>Created Date:</div>
// //                         <div>01.06.2024</div>
// //                     </div>
// //                     <div>
// //                         <div>Hourly Rate:</div>
// //                         <div>None</div>
// //                     </div>
// //                     <div>
// //                         <div>Total Time</div>
// //                         <div>1008h 0m</div>
// //                     </div>
// //                 </div>
// //                 <div class="files">
// //                     <div class="right-side-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
// //                         <div style={{ display: 'flex', alignItems: 'center', width: 'auto' }}>

// //                             <img src="" alt="" />
// //                             <div>Files</div>
// //                         </div>
// //                         <button class="button"></button>
// //                     </div>
// //                     <img src={img} alt="nofile img" />
// //                 </div>
// //             </div>
// //         </div>

// //     )
// // }

// // export default TaskDescription


// import React, { useState } from 'react';
// import img from '../assets/img/nofiles.jpg';
// import '../css/TaskDescription.css';

// function TaskDescription() {
//     const [subtasks, setSubtasks] = useState([]);
//     const [newSubtask, setNewSubtask] = useState('');
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleAddSubtask = (e) => {
//         if (e.key === 'Enter' && newSubtask.trim() !== '') {
//             setSubtasks([...subtasks, { text: newSubtask, completed: false }]);
//             setNewSubtask('');
//         }
//     };

//     const handleCompleteSubtask = (index) => {
//         const updatedSubtasks = subtasks.map((subtask, i) => (
//             i === index ? { ...subtask, completed: !subtask.completed } : subtask
//         ));
//         setSubtasks(updatedSubtasks);
//     };

//     const handleDeleteSubtask = (index) => {
//         setSubtasks(subtasks.filter((_, i) => i !== index));
//     };

//     const completedCount = subtasks.filter(subtask => subtask.completed).length;
//     const totalCount = subtasks.length;
//     const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleUpdate = () => {
//         // Handle update logic
//     };

//     const handleMarkComplete = () => {
//         // Handle mark as complete logic
//     };

//     const handleMarkCancelled = () => {
//         // Handle mark as cancelled logic
//     };

//     const handleDelete = () => {
//         // Handle delete logic
//     };
//     return (
//         <div className="container">
//             <div className="left-side">
//                 <div>
//                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <div className="task-title">TASK-7 Demo Test</div>
//                         <button onClick={toggleDropdown}>⋮</button>
//                         {dropdownOpen && (
//                             <div className="dropdown-menu">
//                                 <div onClick={handleUpdate}>Update</div>
//                                 <div onClick={handleMarkComplete}>Mark as Complete</div>
//                                 <div onClick={handleMarkCancelled}>Mark as Cancelled</div>
//                                 <div onClick={handleDelete}>Delete</div>
//                             </div>
//                         )}
//                     </div>
//                     <div className="description">
//                         <div><b>Description</b></div>
//                         <div className="small">DEMO Task</div>
//                     </div>
//                     <div className="subtasks">
//                         <div className='subtask-head'>Sub Tasks: {totalCount} subtasks</div>
//                         <div>{completedCount} of {totalCount} {progressPercentage}% subtasks complete.</div>
//                     </div>
//                 </div>
//                 <div className="subtasks-list">
//                     <input
//                         type="text"
//                         placeholder="Write a new task and hit enter..."
//                         value={newSubtask}
//                         onChange={(e) => setNewSubtask(e.target.value)}
//                         onKeyPress={handleAddSubtask}
//                     />
//                     {subtasks.map((subtask, index) => (
//                         <div key={index} className="subtask-item">
//                             <div style={{ textDecoration: subtask.completed ? 'line-through' : 'none' }}>
//                                 {subtask.text}
//                             </div>
//                             <button onClick={() => handleCompleteSubtask(index)}>✔</button>
//                             <button onClick={() => handleDeleteSubtask(index)}>✖</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="right-side">
//                 <div className="right-side-title">Information</div>
//                 <div className="information-grid">
//                     <div>
//                         <div>Related</div>
//                         <button className="button"> Project</button>
//                     </div>
//                     <div>
//                         <div>Status</div>
//                         <div>Open</div>
//                     </div>
//                     <div>
//                         <div>Start Date</div>
//                         <div>01.06.2024</div>
//                     </div>
//                     <div>
//                         <div>Due Date</div>
//                         <div>01.07.2024</div>
//                     </div>
//                     <div>
//                         <div>Priority</div>
//                         <div>High</div>
//                     </div>
//                     <div>
//                         <div>Billable</div>
//                         <div>unbillable</div>
//                     </div>
//                     <div>
//                         <div>Assigned By:</div>
//                         <div>Demo 123</div>
//                     </div>
//                     <div>
//                         <div>Created Date:</div>
//                         <div>01.06.2024</div>
//                     </div>
//                     <div>
//                         <div>Hourly Rate:</div>
//                         <div>None</div>
//                     </div>
//                     <div>
//                         <div>Total Time</div>
//                         <div>1008h 0m</div>
//                     </div>
//                 </div>
//                 <div className="files">
//                     <div className="right-side-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <div style={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
//                             <img src="" alt="" />
//                             <div>Files</div>
//                         </div>
//                         <button className="button"></button>
//                     </div>
//                     <img src={img} alt="nofile img" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TaskDescription;



import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/nofiles.jpg';
import '../css/TaskDescription.css';
import ProgressBar from "@ramonak/react-progress-bar";

function TaskDescription() {
    const [subtasks, setSubtasks] = useState([]);
    const [newSubtask, setNewSubtask] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const completedCount = subtasks.filter(subtask => subtask.completed).length;
    const totalCount = subtasks.length;
    const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleAddSubtask = (e) => {
        if (e.key === 'Enter' && newSubtask.trim() !== '') {
            setSubtasks([...subtasks, { text: newSubtask, completed: false }]);
            setNewSubtask('');
        }
    };

    const handleCompleteSubtask = (index) => {
        const updatedSubtasks = subtasks.map((subtask, i) => (
            i === index ? { ...subtask, completed: !subtask.completed } : subtask
        ));
        setSubtasks(updatedSubtasks);
    };

    const handleDeleteSubtask = (index) => {
        setSubtasks(subtasks.filter((_, i) => i !== index));
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // const handleUpdate = () => {
    //     // Handle update logic
    // };

    // const handleMarkComplete = () => {
    //     // Handle mark as complete logic
    // };

    // const handleMarkCancelled = () => {
    //     // Handle mark as cancelled logic
    // };

    // const handleDelete = () => {
    //     // Handle delete logic
    // };

    return (
        <div className="container">
            <div className="left-side">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="task-title">TASK-7 Demo Test</div>
                        <div>
                            <button onClick={toggleDropdown} className='three-dot'>...</button>
                            {isDropdownOpen && (
                                <div className="dropdown-menu" ref={dropdownRef}>
                                    <div>Update</div>
                                    <div>Mark as Complete</div>
                                    <div>Mark as Cancelled</div>
                                    <div>Delete</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="description">
                        <div><b>Description</b></div>
                        <div className="small">DEMO Task</div>
                    </div>
                    <div className="subtasks">
                        <div className='subtask-head'>Sub Tasks: {totalCount} subtasks</div>
                        <div>{completedCount} of {totalCount} subtasks complete.</div>
                        <div style={{ width: "100%" }}>
                            <ProgressBar style={{ width: "100%" }} completed={progressPercentage} />
                        </div>
                    </div>
                </div>
                <div className="subtasks-list">
                    <input
                        type="text"
                        placeholder="Write a new task and hit enter..."
                        value={newSubtask}
                        onChange={(e) => setNewSubtask(e.target.value)}
                        onKeyDown={handleAddSubtask}
                    />
                    {subtasks.map((subtask, index) => (
                        <div key={index} className="subtask-item">
                            <div style={{ color: subtask.completed ? 'red' : 'black' }}>
                                {subtask.text}
                            </div>
                            <button style={{ border: 'black 1px solid', backgroundColor: 'green' }} onClick={() => handleCompleteSubtask(index)}>✔</button>
                            <button style={{ border: 'black 1px solid', backgroundColor: 'red' }} onClick={() => handleDeleteSubtask(index)}>✖</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-side">
                <div className="right-side-title">Information</div>
                <div className="information-grid">
                    <div>
                        <h5>Related</h5>
                        <button className="button"> Project</button>
                    </div>
                    <div>
                        <h5>Status</h5>
                        <div className='info-detail'>Open</div>
                    </div>
                    <div>
                        <h5>Start Date</h5>
                        <div className='info-detail'>01.06.2024</div>
                    </div>
                    <div>
                        <h5>Due Date</h5>
                        <div className='info-detail'>01.07.2024</div>
                    </div>
                    <div>
                        <h5>Priority</h5>
                        <div className='info-detail'>High</div>
                    </div>
                    <div>
                        <h5>Billable</h5>
                        <div className='info-detail'>unbillable</div>
                    </div>
                    <div>
                        <h5>Assigned By:</h5>
                        <div className='info-detail'>Demo 123</div>
                    </div>
                    <div>
                        <h5>Created Date:</h5>
                        <div className='info-detail'>01.06.2024</div>
                    </div>
                    <div>
                        <h5>Hourly Rate:</h5>
                        <div className='info-detail'>None</div>
                    </div>
                    <div>
                        <h5>Total Time</h5>
                        <div className='info-detail'>1008h 0m</div>
                    </div>
                </div>
                <div className="files">
                    <div className="right-side-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
                            <img src="" alt="" />
                            <div>Files</div>
                        </div>
                        <button className="button"></button>
                    </div>
                    <img src={img} alt="nofile img" />
                </div>
            </div>
        </div>
    );
}

export default TaskDescription;
