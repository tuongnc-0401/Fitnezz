import { Button, CircularProgress, Container, CssBaseline, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createdProduct } from '../../../actions/productActions';
import useStyles from './styles';

const CreateProduct = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
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


        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    CREATE NEW PRODUCT
                </Typography>
                {loading && <CircularProgress style={{ marginTop: '10px' }} color="secondary" />}
                {error && <Alert style={{ marginTop: '10px' }} severity="error">{error}</Alert>}
                {success && <Alert style={{ marginTop: '10px' }} severity="success" fullWidth>Success</Alert>}
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField autoComplete="name" autoFocus margin="normal" name="name" variant="outlined" label="Name" fullWidth value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })}></TextField>
                    <TextField margin="normal" name="brand" variant="outlined" label="Brand" fullWidth value={productData.brand} onChange={(e) => setProductData({ ...productData, brand: e.target.value })}></TextField>
                    <TextField margin="normal" name="category" variant="outlined" label="Category" fullWidth value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })}></TextField>
                    <TextField margin="normal" name="description" variant="outlined" label="Description" fullWidth value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })}></TextField>
                    <TextField margin="normal" name="price" type="Number" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: +e.target.value })}></TextField>
                    <TextField margin="normal" name="rating" type="Number" variant="outlined" label="Rating" fullWidth value={productData.rating} onChange={(e) => setProductData({ ...productData, rating: +e.target.value })}></TextField>
                    <TextField margin="normal" name="numReviews" type="Number" variant="outlined" label="Num Reviews" fullWidth value={productData.numReviews} onChange={(e) => setProductData({ ...productData, numReviews: +e.target.value })}></TextField>
                    <div>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, image: base64 })}>
                        </FileBase>
                    </div>
                    <Button style={{ backgroundColor: '#f73471' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
                    </Button>
                </form>
            </div>
        </Container >


    )
}

export default CreateProduct
