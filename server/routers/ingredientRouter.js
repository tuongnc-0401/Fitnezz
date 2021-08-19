import expressAsyncHandler from 'express-async-handler'
import express from 'express'
import Ingredient from '../models/ingredientModel.js'
import data from '../data.js'
const ingredientRouter = express.Router()

ingredientRouter.get('/', expressAsyncHandler(async (req, res) => {
    const ingredients = await Ingredient.find({})
    res.send(ingredients)
}))

ingredientRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdIngredient = await Ingredient.insertMany(data.ingredients)
    res.send({ createdIngredient })
}))

ingredientRouter.get
export default ingredientRouter