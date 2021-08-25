import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Meal from '../models/mealModel.js'
import { isAdmin, isAuth } from '../utils.js';
import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name: 'tuongtuong0401',
    api_key: '542792612474969',
    api_secret: 'WFMTbxBh13oyoH24EDQxxlzgUNk',
})

const mealRouter = express.Router();
const huy = [
    {
        name: "huy",
        image: 'https://picsum.photos/200',
        type: 'protein',
        instruction: 'high quality product high quality product high quality product high quality product high quality product high quality product',
        ingredients: "hehe",
        url: 'https://www.youtube.com/embed/P1mInEK7BEU',
        fruit: "6124f74dab9a228c14faf65b",
        vegetable: "6124f74dab9a228c14faf65b",
        dairy: "6124f74dab9a228c14faf65b",
        grain: "6124f74dab9a228c14faf65b",
        protein: "6124f74dab9a228c14faf65b",
    },
    {
        name: "qh",
        image: 'https://picsum.photos/200',
        type: 'protein',
        instruction: 'high quality product high quality product high quality product high quality product high quality product high quality product',
        ingredients: "hehe",
        url: 'https://www.youtube.com/embed/P1mInEK7BEU',
        fruit: "6124f74dab9a228c14faf65b",
        vegetable: "6124f74dab9a228c14faf65b",
        dairy: "6124f74dab9a228c14faf65b",
        grain: "6124f74dab9a228c14faf65b",
        protein: "6124f74dab9a228c14faf65b",
    },
]

mealRouter.get('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const meals = await Meal.find({})
    res.send(meals)
}))

mealRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deletedMeal = await Meal.findById(req.params.id)
    if (deletedMeal) {
        await deletedMeal.remove()
        res.send({ message: "Meal Deleted" })
    } else {
        res.send("Error in Deletion.")
    }
}))

mealRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdMeals = await Meal.insertMany(huy)
    res.send({ createdMeals })
}))

mealRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
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
    const newMeal = new Meal({
        name: req.body.name,
        image: uploadedResponse.url,
        type: req.body.type,
        instruction: req.body.instruction,
        ingredients: req.body.ingredients,
        url: req.body.url,
        fruit: req.body.fruit,
        vegetable: req.body.vegetable,
        dairy: req.body.dairy,
        grain: req.body.grain,
        protein: req.body.protein,
    })
    try {
        await newMeal.save()
        res.status(201).json(req.body);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}))

export default mealRouter