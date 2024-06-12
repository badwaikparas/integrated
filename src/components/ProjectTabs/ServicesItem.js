import React from 'react';
import { Paper, Grid, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
    amount: {
        textAlign: 'right',
    },
}));

const ServicesItem = ({ title, description, category, qty, unit, amount, noTax, onEdit, onDelete }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item>
                    <DescriptionIcon className={classes.icon} />
                </Grid>
                <Grid item xs container className={classes.item}>
                    <Grid item xs={12} sm container>
                        <Grid item xs={12} sm={4} container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {description}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="subtitle2" color="textSecondary">
                                CATEGORY
                            </Typography>
                            <Typography variant="body2">
                                {category}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Typography variant="subtitle2" color="textSecondary">
                                QTY
                            </Typography>
                            <Typography variant="body2">
                                {qty}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Typography variant="subtitle2" color="textSecondary">
                                UNIT
                            </Typography>
                            <Typography variant="body2">
                                {unit}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="subtitle2" color="textSecondary">
                                AMOUNT
                            </Typography>
                            <Typography variant="body2" className={classes.amount}>
                                {amount}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Typography variant="subtitle2" color="textSecondary">
                                NO TAX
                            </Typography>
                            <Typography variant="body2">
                                {noTax}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1} container justifyContent="flex-end" alignItems="center">
                            <IconButton onClick={onEdit} aria-label="edit" color="primary">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={onDelete} aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ServicesItem;
