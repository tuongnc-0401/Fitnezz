import expressAsyncHandler from 'express-async-handler'
import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'
import { isAdmin, isAuth } from '../utils.js'
import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name: 'tuongtuong0401',
    api_key: '542792612474969',
    api_secret: 'WFMTbxBh13oyoH24EDQxxlzgUNk',
})
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
    try {
        const fileStr = req.body.image;
        var uploadedResponse = await cloudinary.uploader.upload(
            fileStr, {
            upload_preset: 'Fitnezz'
        }
        )
    } catch (error) {
        res.status(500).json({ message: "upload image error" })
    }

    const newProduct = new Product({
        name: req.body.name,
        category: req.body.category,
        image: uploadedResponse.url,
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

productRouter.delete("/:id", isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id)
    if (deletedProduct) {
        await deletedProduct.remove()
        res.send({ message: "Product Deleted" })
    } else {
        res.send("Error in Deletion.")
    }
}))

productRouter.put("/:id", isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    if (req.body.image) {
        try {
            const fileStr = req.body.image;
            var uploadedResponse = await cloudinary.uploader.upload(
                fileStr, {
                upload_preset: 'Fitnezz'
            }
            )
        } catch (error) {
            res.status(500).json({ message: "upload image error" })
        }
    }
    const product = await Product.findById(req.params.id)
    if (product) {
        product.name = req.body.name || product.name
        product.brand = req.body.brand || product.brand
        product.category = req.body.category || product.category
        product.description = req.body.description || product.description
        product.price = req.body.price || product.price
        product.rating = req.body.rating || product.rating
        product.numReviews = req.body.numReviews || product.numReviews
        product.image = uploadedResponse.url || product.image
        const updated = await product.save()
        res.send(updated)
    } else {
        res.send("Error in Updation.")
    }
}))

export default productRouter