import React from 'react';
import TaskItem from './TaskItem';

const Tasks = () => {
    const handleEdit = () => {
        alert('Edit button clicked');
    };

    return (
        <div style={{ padding: '20px' }}>
            <TaskItem
                title="TASK-8 Demo testing task"
                description="AAAAAAAAAA"
                startDate="04.06.2024"
                dueDate="18.06.2024"
                status="OPEN"
                onEdit={handleEdit}
            />
        </div>
    );
};

export default Tasks;
