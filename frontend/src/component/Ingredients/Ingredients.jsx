import { Box, CircularProgress, Grid, Paper, Snackbar, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIngredients } from '../../actions/ingredientActions';
import Ingredient from './Ingredient/Ingredient';
import useStyles from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import { removeCartIngredient, updateCartIngredient } from '../../actions/cartIngredientActions';

const Ingredients = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [errQuantity, setErrQuantity] = useState(false);

    const ingredientList = useSelector(state => state.ingredientList)
    const { loading, error, ingredients } = ingredientList

    const cartIngredient = useSelector(state => state.cartIngredient)
    const { cartIngredients } = cartIngredient

    const total = cartIngredients.reduce((a, b) => a + b.qty * b.calo, 0).toFixed(2)

    const handleUpdateIngredient = (ingredient, qty) => {
        dispatch(updateCartIngredient(ingredient, qty))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrQuantity(false);
    };

    useEffect(() => {
        dispatch(listIngredients())
    }, [dispatch])
    return (
        <main className={classes.container}>
            {loading ? <CircularProgress color="secondary" />
                : error ? <Alert severity="error">{error}</Alert> :
                    <>
                        <Snackbar open={errQuantity} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error">
                                Can not choose 0 quantity!
                            </Alert>
                        </Snackbar>
                        <Grid container spacing={3} className={classes.gridContainer}>
                            <Grid item xs={12} sm={6} md={8} lg={9}>
                                <Grid container spacing={3}>
                                    {ingredients.map(ingredient => {
                                        const disable = cartIngredients.find((x) => x.ingredient == ingredient._id)
                                        return (
                                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                                <Ingredient ingredient={ingredient} disable={disable} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Paper elevation={3} style={{ height: '295px', overflowY: 'scroll' }}>
                                    <Typography variant="h6" className={classes.pink} style={{ textAlign: "center", marginTop: '5px' }}>INGREDIENT LIST</Typography>
                                    {cartIngredients.length == 0 ?
                                        <Box p={2}>
                                            <Typography variant="body1">Add ingredients you prefer to this list to calculate the calories</Typography>
                                        </Box> :
                                        cartIngredients.map(ingredient => (
                                            <Paper style={{ display: "flex", margin: '10px' }} elevation={2} >
                                                <img src={ingredient.image} width={75} height={75} />
                                                <Box style={{ flexGrow: '1' }} p={1} >
                                                    <Box display='flex'>
                                                        <Box style={{ fontWeight: '500' }}>{ingredient.name}</Box>
                                                        <ClearIcon onClick={() => dispatch(removeCartIngredient(ingredient))} style={{ fontSize: '15px', width: "21px", height: "21px", marginLeft: 'auto', textAlign: "center", cursor: 'pointer' }}>X</ClearIcon>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" mt={2}>
                                                        <input style={{ width: '50px', marginRight: 'auto' }} value={ingredient.qty === 0 ? null : ingredient.qty}
                                                            onChange={(e) => {
                                                                handleUpdateIngredient(ingredient, +e.target.value)
                                                            }}
                                                            onBlur={(e) => {
                                                                if (+(e.target.value) === 0) {
                                                                    handleUpdateIngredient(ingredient, 1)
                                                                    setErrQuantity(true)
                                                                }
                                                            }} ></input>
                                                        <Box className={classes.pink} >{(ingredient.calo * ingredient.qty).toFixed(2)}kcal</Box>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        ))
                                    }
                                </Paper>
                                <Paper style={{ marginTop: '5px', backgroundColor: '#f73471', padding: '10px' }} elevation={2}>
                                    <Box display="flex">
                                        <Typography style={{ color: 'white', display: 'flex', flexGrow: '1' }} variant="h5">TOTAL:</Typography>
                                        <Typography style={{ color: 'white', display: 'flex' }} variant="h5">{total}KCAL</Typography>
                                    </Box>
                                </Paper>
                                {total > 1000 &&
                                    <Alert style={{ marginTop: '10px' }} severity="warning">Please make your meal under 1000 calories</Alert>
                                }
                            </Grid>
                        </Grid>
                    </>
            }


        </main >
    )
}

export default Ingredients
