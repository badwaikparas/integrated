// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// // import TimelineItem from '@mui/lab/TimelineItem';
// // import TimelineSeparator from '@mui/lab/TimelineSeparator';
// // import TimelineContent from '@mui/lab/TimelineContent';
// // import TimelineDot from '@mui/lab/TimelineDot';
// import TimeLineTile from './TimeLineTile';
// // import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// // import Typography from '@material-ui/core/Typography';

// export default function TimeLineSection() {
//     return (
//         <Timeline>
//             <TimeLineTile value='eat' />
//             <TimeLineTile value='drink' />

//             {/* <TimelineItem>
//                 <TimelineOppositeContent style={{ display: 'none' }}>
//                     <Typography variant="body2" color="textSecondary">
//                         9:30 am
//                     </Typography>
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot style={{ border: "black 5px solid" }} />
//                 </TimelineSeparator>
//                 <TimelineContent></TimelineContent>
//             </TimelineItem> */}
//         </Timeline>
//     );
// }


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@mui/lab/Timeline';
import TimeLineTile from './TimeLineTile'; // Make sure the import path is correct

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
    },
}));

function TimeLineContainer() {
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
                    <TimeLineTile
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

export default TimeLineContainer;
