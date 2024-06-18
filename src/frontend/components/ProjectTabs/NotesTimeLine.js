import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@mui/lab/Timeline';
import NotesTimeLineTile from "./NotesTimeLineTile";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
    },
}));

function NotesTimeLineContainer() {
    const classes = useStyles();
    const [events, setEvents] = useState([
        { id: 1, value: 'Eat' },
        { id: 2, value: 'Sleep' },
        { id: 3, value: 'Code' },
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
                    <NotesTimeLineTile
                        key={event.id}
                        id={event.id}
                        value={event.value}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </Timeline>
        </div>
    );
}

export default NotesTimeLineContainer;