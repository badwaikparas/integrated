import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@mui/icons-material/Description';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
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
    amount: {
        textAlign: 'right',
    },
}));

const ExpenseItem = ({ title, description, amount, category, date }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item>
                    <DescriptionIcon className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm container className={classes.item}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="bosy2" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Amount
                    </Typography>
                    <Typography variant="body2" className={classes.amount}>
                        {amount}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Catagory
                    </Typography>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        {category}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Date
                    </Typography>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        {date}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ExpenseItem;
