import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles.js'
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions';
const Products = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    console.log(loading, error, products)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const classes = useStyles()
    return (
        <main className={classes.container}>
            {loading ? <CircularProgress color="secondary" />
                : error ? <Alert severity="error">{error}</Alert>
                    : <Grid container spacing={3}>
                        {products.map(product => (
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Product product={product} />
                            </Grid>
                        ))}
                    </Grid>
            }
        </main >
    )
}

export default Products
