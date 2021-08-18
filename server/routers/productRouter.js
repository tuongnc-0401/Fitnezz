import expressAsyncHandler from 'express-async-handler'
import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'
import { isAdmin, isAuth } from '../utils.js'
const productRouter = express.Router()

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
}))

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products)
    res.send({ createdProducts })
}))

productRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        brand: req.body.brand,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        description: req.body.description,
    });
    try {
        await newProduct.save();
        res.status(201).json(req.body);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(400).send({ message: "Product not found" })
    }
}))

export default productRouter