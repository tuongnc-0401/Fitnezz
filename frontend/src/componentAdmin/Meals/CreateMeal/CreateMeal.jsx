import { Box, Button, CircularProgress, Container, CssBaseline, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Link as changeURL } from "react-router-dom";
import { listIngredients } from '../../../actions/ingredientActions';

const CreateMeal = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const ingredientList = useSelector(state => state.ingredientList)
    const { ingredients } = ingredientList
    const [mealData, setMealData] = useState({
        name: '', image: '', type: '', instruction: '', ingredients: '', url: '', fruit: '', vegetable: '', dairy: '', grain: '', protein: ''
    });
    // const newMeal = useSelector(state => state.newMeal)
    // const { loading, success, error } = newMeal
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("meal", mealData);
        // dispatch(createdIngredient(ingredientData))
    }
    useEffect(() => {
        dispatch(listIngredients())
    }, [dispatch])
    // useEffect(() => {
    //     if (newMeal) {
    //         newMeal.success = false
    //     }
    // }, [newMeal])

    const handleOnChange = (e) => {
        setMealData({ ...mealData, [e.target.name]: e.target.value })
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    CREATE NEW INGREDIENT
                </Typography>
                {/* {loading && <CircularProgress style={{ marginTop: '10px' }} color="secondary" />}
                {error && <Alert style={{ marginTop: '10px' }} severity="error">{error}</Alert>}
                {success && <Box display="flex" mt={2}>
                <Alert elevation={2} severity="success" fullWidth>Success </Alert>
                </Box>} */}
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField autoComplete="name" autoFocus margin="normal" name="name" variant="outlined" label="Name" fullWidth value={mealData?.name} onChange={(e) => setMealData({ ...mealData, name: e.target.value })}></TextField>
                    <div>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setMealData({ ...mealData, image: base64 })}>
                        </FileBase>
                    </div>
                    {mealData?.image && (
                        <div>
                            < img src={mealData.image} width="50%" alt="ingredientimage" />
                        </div>
                    )}
                    <FormControl component="fieldset" style={{ marginTop: '10px' }}>
                        <FormLabel component="legend">Category</FormLabel>
                        <RadioGroup aria-label="type" name="type" value={mealData?.type} onChange={(e) => setMealData({ ...mealData, category: e.target.value })}>
                            <FormControlLabel value="breakfast" control={<Radio />} label="Breakfast" />
                            <FormControlLabel value="lunch" control={<Radio />} label="Lunch" />
                            <FormControlLabel value="dinner" control={<Radio />} label="Dinner" />
                        </RadioGroup>
                    </FormControl>

                    <TextField multiline margin="normal" name="instruction" variant="outlined" label="Instruction" fullWidth value={mealData?.instruction} onChange={(e) => setMealData({ ...mealData, instruction: e.target.value })}></TextField>
                    <TextField multiline margin="normal" name="ingredients" variant="outlined" label="Ingredients" fullWidth value={mealData?.ingredients} onChange={(e) => setMealData({ ...mealData, ingredients: e.target.value })}></TextField>
                    <TextField multiline margin="normal" name="url" variant="outlined" label="URL" fullWidth value={mealData?.url} onChange={(e) => setMealData({ ...mealData, url: e.target.value })}></TextField>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <label for="fruit">Choose a fruit: </label>
                        </Grid>
                        <Grid container justifyContent="flex-end" item xs={12} md={6}>
                            <select fullWidth name="fruit" id="fruit" onChange={handleOnChange} required>
                                {ingredients.map((ingredient, index) => {
                                    return ingredient.category === 'fruit'
                                        ? (<option key={index} value={ingredient._id} >{ingredient.name}</option>)
                                        : null
                                })}
                            </select>
                        </Grid>


                    </Grid>

                    <Grid container spacing={1} style={{ marginTop: "5px" }}>
                        <Grid item xs="12" md="6">
                            <Button component={changeURL} to="/admin/ingredient/" variant="outlined" fullWidth>Go Back</Button>
                        </Grid>
                        <Grid item xs="12" md="6">
                            <Button style={{ backgroundColor: '#f73471' }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"

                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Container >


    )
}

export default CreateMeal
