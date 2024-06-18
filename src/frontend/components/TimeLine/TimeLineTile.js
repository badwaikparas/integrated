// import React from 'react'
// // import TimelineItem from '@mui/lab/TimelineItem';
// // import TimelineSeparator from '@mui/lab/TimelineSeparator';
// // import TimelineConnector from '@mui/lab/TimelineConnector';
// // import TimelineContent from '@mui/lab/TimelineContent';
// // import TimelineDot from '@mui/lab/TimelineDot';

// // import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// // import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// // import HotelIcon from '@mui/icons-material/Hotel';
// // import RepeatIcon from '@mui/icons-material/Repeat';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         padding: '6px 16px',
//     },
//     missingOppositeContent: {
//         "&:before": {
//             display: "none"
//         }
//     },
//     secondaryTail: {
//         backgroundColor: theme.palette.secondary.main,
//     },
// }));

// function TimeLineTile(props) {

//     const classes = useStyles();


//     return (
//         // <TimelineItem>
//         //     <TimelineSeparator>
//         //         <TimelineDot />
//         //         <TimelineConnector />
//         //     </TimelineSeparator>
//         //     <TimelineContent>{props.value}</TimelineContent>
//         // </TimelineItem>

//         <TimelineItem>
//             <TimelineOppositeContent style={{ display: 'none' }}>
//                 {/* <Typography variant="body2" color="textSecondary">
//                     9:30 am
//                 </Typography> */}
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//                 <TimelineDot>
//                     <FastfoodIcon />
//                 </TimelineDot>
//                 <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent>
//                 <Paper elevation={3} className={classes.paper}>
//                     <Typography variant="h6" component="h1">
//                         {props.value}
//                     </Typography>
//                     <Typography>Because you need strength</Typography>
//                 </Paper>
//             </TimelineContent>
//         </TimelineItem>


//     )
// }

// export default TimeLineTile

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

function TimeLineTile(props) {
    const classes = useStyles();

    return (
        <TimelineItem >
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
                {/* <div>Paras Badwaik</div> */}
            </TimelineContent>
        </TimelineItem>
    );
}

export default TimeLineTile;
