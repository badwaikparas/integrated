
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function ProjectActivityTimelineTile(props) {
    const classes = useStyles();

    return (
        <TimelineItem>
            <TimelineOppositeContent style={{ display: 'none' }} />
            <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <TimelineDot>
                    {/* <FastfoodIcon /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ marginBottom: "25px" }}>
                {/* <Paper elevation={3} className={classes.paper}> */}
                <div className={classes.contentContainer}>
                    <Typography variant="h6" component="h1">
                        {props.date} | {props.value}
                    </Typography>
                    <Typography>Admin added Task for PRJ-5</Typography>
                </div>
                {/* <div>
                    <IconButton
                        onClick={() => props.onEdit(props.id)}
                        aria-label="edit"
                        color="primary"
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => props.onDelete(props.id)}
                        aria-label="delete"
                        color="secondary"
                    >
                        <DeleteIcon />
                    </IconButton>
                </div> */}
                {/* </Paper> */}
                {/* <div>Paras Badwaik</div> */}
            </TimelineContent>
        </TimelineItem >
    );
}

export default ProjectActivityTimelineTile;