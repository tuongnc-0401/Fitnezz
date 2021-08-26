import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Recipe = () => {
    const classes = useStyles()
    const print = (divName) => {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }
    const hello = "<ol> <li>Very high in Vitamin C (90% Recommended Daily Intake per serving)</li><li>Source of potassium (270 mg per serving)</li><li>Fat-free (0 g per serving)</li></ol>"
    return (
        <section className={classes.container}>
            <Box textAlign="right">
                <Button onClick={() => print("printContain")} className={classes.button}>PRINT THIS RECIPE</Button>
            </Box>
            <div id="printContain">
                <Typography variant="h3" className={classes.title}>Chilled Avocado & Zucchini Soup</Typography>
                <Grid container spacing={3} style={{ marginTop: '30px' }}>
                    <Grid item xs={12}>
                        <Box style={{ height: '600px' }}>
                            <img src="https://picsum.photos/1000/1000" alt="recipedetails" style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: '30px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" style={{ color: '#f73471', fontWeight: '600', marginBottom: '5px' }}>Instruction</Typography>
                        <Typography dangerouslySetInnerHTML={{ __html: hello }} style={{ color: 'rgb(134, 142, 150)' }}></Typography>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ minHeight: '100%' }}>
                        <Typography variant="h4" style={{ color: '#f73471', fontWeight: '600', marginBottom: '5px' }}>Ingredients</Typography>
                        <Typography dangerouslySetInnerHTML={{ __html: hello }} style={{ color: 'rgb(134, 142, 150)', marginBottom: '20px' }}></Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container style={{ marginTop: '60px' }}>
                <Grid item className={classes.justify} xs={12}>
                    <Box className={classes.videos}>
                        <Typography variant="h4" style={{ color: '#f73471', fontWeight: '600', marginBottom: '30px' }}>Videos</Typography>
                        <iframe
                            style={{ width: '100%', height: "318px" }}
                            src="https://www.youtube.com/embed/W1LAsyPMXsA"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                    </Box>
                </Grid>

            </Grid>
        </section >
    )
}

export default Recipe
