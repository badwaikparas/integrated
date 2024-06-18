import React from 'react'
import { Grid, Typography } from '@mui/material';

function GridItem() {
    return (
        <Grid item>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                        Date
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        03.06.2024
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GridItem