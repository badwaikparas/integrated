import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@mui/lab/Timeline';
import ProjectActivityTimelineTile from './ProjectActivityTimelineTile';// Make sure the import path is correct

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
    },
}));

function ProjectActivityTimeLine() {
    const classes = useStyles();
    const [events, setEvents] = useState([
        { id: 1, value: '11:02:03', date: '04.06.2024' },
        { id: 2, value: '11:02:03', date: '03.06.2024 ' },
        { id: 3, value: '11:02:03', date: '31.05.2024 ' },
    ]);

    const handleDelete = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const handleEdit = (id) => {
        // Implement your edit logic here
        // For example, you could prompt the user to enter new text for the event
        const newContent = prompt('Enter new content:');
        if (newContent) {
            setEvents(events.map(event => event.id === id ? { ...event, value: newContent } : event));
        }
    };

    return (
        <div className={classes.root}>
            <Timeline>
                {events.map((event) => (
                    <ProjectActivityTimelineTile
                        key={event.id}
                        id={event.id}
                        date={event.date}
                        value={event.value}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </Timeline>
        </div>
    );
}

export default ProjectActivityTimeLine;