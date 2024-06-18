import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

function NotesTimeLineTile(props) {
    const classes = useStyles();

    return (
        <TimelineItem style={{ borderBottom: "dashed 1px black" }}>
            <TimelineOppositeContent style={{ display: 'none' }} />
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <div className={classes.contentContainer}>
                        <Typography variant="h6" component="h1">
                            {props.value}
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </div>
                    <div>
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
                    </div>
                </Paper>
                <div>Added by Admin at 05.06.2024 11:34:17</div>
            </TimelineContent>
        </TimelineItem>
    );
}

export default NotesTimeLineTile;
