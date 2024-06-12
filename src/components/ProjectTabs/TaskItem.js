import React from 'react';
import { Paper, Grid, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    gridContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    item: {
        flexGrow: 1,
    },
    dates: {
        textAlign: 'right',
    },
    status: {
        textAlign: 'center',
    },
    description: {
        color: theme.palette.text.secondary,
    },
}));

const TaskItem = ({ title, description, startDate, dueDate, status, onEdit }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item>
                    <CheckCircleIcon className={classes.icon} color="success" />
                </Grid>
                <Grid item xs={12} sm container className={classes.item}>
                    <Grid item xs={12} sm={4} container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="body2" className={classes.description}>
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.dates}>
                        <Typography variant="body2" color="textSecondary">
                            <AccessTimeIcon fontSize="small" /> Start Date
                        </Typography>
                        <Typography variant="body2">
                            {startDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.dates}>
                        <Typography variant="body2" color="textSecondary">
                            <AccessTimeIcon fontSize="small" /> Due Date
                        </Typography>
                        <Typography variant="body2">
                            {dueDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.status}>
                        <Typography variant="body2" color="textSecondary">
                            <FlagIcon fontSize="small" /> Status
                        </Typography>
                        <Typography variant="body2">
                            {status}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} container justifyContent="flex-end" alignItems="center">
                        <IconButton onClick={onEdit} aria-label="edit" color="primary">
                            <EditIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TaskItem;
