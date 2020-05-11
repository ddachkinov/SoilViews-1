import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import styles from './SelectedCropsCards.module.css'

export const SelectedCropsCards = ({ selectedCrops }) => {
    return (
        <div>
            <Typography variant="h5" >
            You selected:
            </Typography>
            <Grid container spacing={3} className={styles.selected}>
                {selectedCrops.map((crop) =>
                    <Grid item component={Card} className={styles.cropCard} key={crop}>
                        <CardContent className={styles.crop}>
                            <Typography>
                                {crop}
                            </Typography>
                        </CardContent>
                    </Grid>)}
            </Grid>
        </div>
    );
}

export default SelectedCropsCards;