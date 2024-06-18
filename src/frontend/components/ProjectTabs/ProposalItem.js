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

function ProposalItem({ title, description, date, openTill, status, amount }) {
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
                            {/* <Typography gutterBottom> */}
                            {title}
                            {/* </Typography> */}
                            <Typography variant="body2" color="textSecondary">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Date
                    </Typography>
                    <Typography variant="body2" className={classes.amount}>
                        {date}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Open Till
                    </Typography>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        {openTill}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Status
                    </Typography>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        {status}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        Amount
                    </Typography>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        {amount}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default ProposalItem