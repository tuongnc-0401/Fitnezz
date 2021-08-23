import expressAsyncHandler from 'express-async-handler'
import express from 'express'
import Ingredient from '../models/ingredientModel.js'
import data from '../data.js'
import { isAdmin, isAuth } from '../utils.js'
import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name: 'tuongtuong0401',
    api_key: '542792612474969',
    api_secret: 'WFMTbxBh13oyoH24EDQxxlzgUNk',
})
const ingredientRouter = express.Router()

ingredientRouter.get('/', expressAsyncHandler(async (req, res) => {
    const ingredients = await Ingredient.find({})
    res.send(ingredients)
}))

ingredientRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdIngredient = await Ingredient.insertMany(data.ingredients)
    res.send({ createdIngredient })
}))

ingredientRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.id)
    if (ingredient) {
        res.send(ingredient)
    } else {
        res.status(400).send({ message: "Ingredient not found" })
    }
}))

ingredientRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deletedIngredient = await Ingredient.findById(req.params.id)
    if (deletedIngredient) {
        await deletedIngredient.remove()
        res.send({ message: "Ingredient Deleted" })
    } else {
        res.send("Error in Deletion.")
    }
}))

ingredientRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
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

    const newIngredient = new Ingredient({
        name: req.body.name,
        category: req.body.category,
        image: uploadedResponse.url,
        description: req.body.description,
        calo: req.body.calo
    })
    try {
        await newIngredient.save()
        res.status(201).json(req.body);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}))

ingredientRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
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

    const ingredient = await Ingredient.findById(req.params.id)
    if (ingredient) {
        ingredient.name = req.body.name || ingredient.name
        ingredient.calo = req.body.calo || ingredient.calo
        ingredient.category = req.body.category || ingredient.category
        ingredient.description = req.body.description || ingredient.description
        ingredient.image = uploadedResponse.url || ingredient.image
        const updated = await ingredient.save()
        res.send(updated)
    } else {
        res.send("Error in Deletion.")
    }
}))
export default ingredientRouter