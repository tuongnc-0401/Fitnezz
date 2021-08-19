import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import useStyles from './styles';

const Ingredients = () => {
    const classes = useStyles()
    const ingredients = [
        {
            id: 1, name: "Apple", image: "https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg", details: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests", calories: "0.42"
        },
        { id: 2, name: "Apple", image: "https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg", details: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests", calories: "7" },
        { id: 3, name: "Apple", image: "https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg", details: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests", calories: "0.8" },
        { id: 4, name: "Apple", image: "https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg", details: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests", calories: "1.5" },
        { id: 5, name: "Apple", image: "https://bellavitashop.co.uk/6288-large_default/red-apples-500g.jpg", details: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests", calories: "3.6" },
    ]
    return (
        <main className={classes.container}>
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={8} lg={9}>
                    <Grid container spacing={3}>
                        {ingredients.map(ingredient => (
                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                <Ingredient ingredient={ingredient} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={3} style={{ height: '295px', overflowY: 'scroll' }}>
                        <Typography variant="h6" className={classes.pink} style={{ textAlign: "center", marginTop: '5px' }}>INGREDIENT LIST</Typography>
                        <Box p={2}>
                            <Typography variant="body1">Add ingredients you prefer to this list to calculate the calories</Typography>
                        </Box>

                        {/* WHEN USERS ADD INGREDIENT THEN OPEN THIS COMMENT */}

                        {/* {ingredients.map(ingredient => (
                            <Paper style={{ display: "flex", margin: '10px' }} elevation={2} >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC49YvyOLLle99skk6BYyDU6w1fEFRDppjwQ&usqp=CAU" width={75} height={75} />
                                <Box style={{ flexGrow: '1' }} p={1} >
                                    <Box display='flex'>
                                        <Box style={{ fontWeight: '500' }}>AppleApple</Box>
                                        <ClearIcon style={{ fontSize: '15px', width: "21px", height: "21px", marginLeft: 'auto', textAlign: "center", cursor: 'pointer' }}>X</ClearIcon>
                                    </Box>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <input style={{ width: '50px', marginRight: 'auto' }} value="1" ></input>
                                        <Box className={classes.pink} >322.75kcal</Box>
                                    </Box>
                                </Box>
                            </Paper>
                        ))} */}

                    </Paper>
                    <Paper style={{ marginTop: '5px', backgroundColor: '#f73471', padding: '10px' }} elevation={2}>
                        <Box display="flex">
                            <Typography style={{ color: 'white', display: 'flex', flexGrow: '1' }} variant="h5">TOTAL CALO:</Typography>
                            <Typography style={{ color: 'white', display: 'flex' }} variant="h5">760KCAL</Typography>
                        </Box>
                    </Paper>

                </Grid>
            </Grid>

        </main >
    )
}

export default Ingredients
