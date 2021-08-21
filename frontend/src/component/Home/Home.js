import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';


const Home = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainContent} square>
            <div className={classes.overlay} />
            <Grid container className={classes.container} spacing={1}>
                <Grid container item direction="column" justifyContent="center"
                    alignItems="flex-start" spacing={2} xs={12} style={{ marginBottom: 150, marginLeft: 400 }}>
                    <Grid item>
                        <Typography variant="h5" align="left" style={{ color: "#000" }}>
                            Start a #ChloeTingChallenge or check out
                        </Typography>
                        <Typography variant="h5" align="left" style={{ color: "#000" }}>
                            my recipes
                        </Typography>
                    </Grid>
                    <Grid container item direction="row" style={{ paddingTop: 40 }}>
                        <Button variant="contained" className={classes.button} size="large">Get Started</Button>
                        <Button variant="contained" className={classes.button} size="large">Recipes</Button>
                        <Button variant="contained" className={classes.button} size="large">Store</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default Home
