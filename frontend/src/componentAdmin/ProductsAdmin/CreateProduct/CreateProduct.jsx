import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, Box, Grid, CircularProgress } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { createdProduct } from '../../../actions/productActions';

const CreateProduct = () => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({
        name: '', image: '', brand: '', category: '', description: '', price: null, rating: null, numReviews: null
    });
    const { loading, success, error } = useSelector(state => state.newProduct)
    console.log(success);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createdProduct(productData))
    }
    return (
        <Box mt={3}>


            <Box ml={6} mr={6}>

                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Box marginBottom={3}>
                            <Paper elevation={3}>
                                <form style={{ padding: "20px" }} autoComplete="off" noValidate onSubmit={handleSubmit}>
                                    <Typography variant="h6">
                                        Create Product
                                    </Typography>
                                    {loading && <CircularProgress color="secondary" />}
                                    {error && <Alert severity="error">{error}</Alert>}
                                    {success && <Typography>Success</Typography>}
                                    <TextField name="name" variant="outlined" label="Name" fullWidth value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })}></TextField>
                                    <div>
                                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, image: base64 })}>
                                        </FileBase>
                                    </div>
                                    <TextField name="brand" variant="outlined" label="Brand" fullWidth value={productData.brand} onChange={(e) => setProductData({ ...productData, brand: e.target.value })}></TextField>
                                    <TextField name="category" variant="outlined" label="Category" fullWidth value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })}></TextField>
                                    <TextField name="description" variant="outlined" label="Description" fullWidth value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })}></TextField>
                                    <TextField name="price" type="Number" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: +e.target.value })}></TextField>
                                    <TextField name="rating" type="Number" variant="outlined" label="Rating" fullWidth value={productData.rating} onChange={(e) => setProductData({ ...productData, rating: +e.target.value })}></TextField>
                                    <TextField name="numReviews" type="Number" variant="outlined" label="Num Reviews" fullWidth value={productData.numReviews} onChange={(e) => setProductData({ ...productData, numReviews: +e.target.value })}></TextField>
                                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                                </form>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}

export default CreateProduct
