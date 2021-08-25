import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Recipe = () => {
    const classes = useStyles()
    const print = () => {
        window.print()
    }
    return (
        <section className={classes.container}>
            <Box textAlign="right">
                <Button onClick={print} className={classes.button}>PRINT THIS RECIPE</Button>
            </Box>
            <Typography variant="h3" className={classes.title}>Chilled Avocado & Zucchini Soup</Typography>
            <Grid container spacing={3} style={{ marginTop: '30px' }}>
                <Grid item md={5}>
                    <img src="https://picsum.photos/1000/1000" alt="recipedetails" style={{ width: '100%', height: '460px' }} />
                </Grid>
                <Grid item md={7} style={{ minHeight: '100%' }}>
                    <Typography variant="h4" style={{ color: '#f73471', fontWeight: '600', marginBottom: '5px' }}>Ingredients</Typography>
                    <Typography style={{ color: 'rgb(134, 142, 150)', marginBottom: '20px' }}>1 block (14oz) super firm tofu* 2 tablespoons avocado oil/olive oil 1/2 white onion , diced (about 1 cup) 3 garlic cloves , minced 1/4 cup tamari/soy sauce , divided 1 package coleslaw mix (12-14oz) 1 head curly kale (about 3 cups chopped) 2 tablespoons rice wine vinegar 1- 2 teaspoons sriracha hot sauce 2 teaspoon toasted sesame oil 1/2 bunch scallions , thinly sliced (about 3 - 4 scallions) Water as needed</Typography>
                    <Typography variant="h4" style={{ color: '#f73471', fontWeight: '600', marginBottom: '5px' }}>Instruction</Typography>
                    <Typography style={{ color: 'rgb(134, 142, 150)' }}>1.Heat 1 tablespoon of oil in a large pan. Cut the tofu into 1" cubes and add it to the pan. Cook for 3 - 4 minutes per side until it's crispy. 2.While the tofu is cooking, heat the second tablespoon of oil in a separate pan. Once hot, add the garlic and onion, and saute for 2 - 3 minutes until soft. Add the ginger and two tablespoons of tamari and stir together. 3. Add the coleslaw mix and kale and saute until everything has wilted. Add a tablespoon or two of water during the cooking process to help it steam. 4. Once softened, add the tofu, the remaining tamari, rice vinegar, hot sauce, toasted sesame oil, and scallions. Cook for another minute or so until everything is combined and flavorful. 5. Serve immediately with a few extra scallions and some sesame seeds.</Typography>
                </Grid>
            </Grid>
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
