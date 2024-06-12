import React from 'react'
// import Timeline from '@material-ui/lab/Timeline';
// import { withStyles } from '@material-ui/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineDot from '@material-ui/lab/TimelineDot';

import { TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator, } from '@mui/lab'

function TimeLineTile(props) {

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector></TimelineConnector>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>
    )
}

export default TimeLineTile