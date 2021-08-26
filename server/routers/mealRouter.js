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


mealRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id)
    res.send(meal)
}))

mealRouter.post('/getone', expressAsyncHandler(async (req, res) => {
    const _id = req.body?._id || 0;

    const count = await Meal.estimatedDocumentCount();
    var rand = Math.floor(Math.random() * count);
    var meals = await Meal.findOne().skip(rand);

    if (_id === 0) {
        res.send(meals)

    } else {

        while (_id.toString() === meals._id.toString()) {

            rand = Math.floor(Math.random() * count);
            meals = await Meal.findOne().skip(rand);


        }
        res.send(meals)
    }

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

mealRouter.put("/:id", isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
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
    const meal = await Meal.findById(req.params.id)
    if (meal) {
        meal.name = req.body.name || meal.name
        meal.type = req.body.type || meal.type
        meal.instruction = req.body.instruction || meal.instruction
        meal.ingredients = req.body.ingredients || meal.ingredients
        meal.url = req.body.url || meal.url
        meal.fruit = req.body.fruit || meal.fruit
        meal.vegetable = req.body.vegetable || meal.vegetable
        meal.dairy = req.body.dairy || meal.dairy
        meal.grain = req.body.grain || meal.grain
        meal.protein = req.body.protein || meal.protein
        meal.image = uploadedResponse.url || meal.image
        const updated = await meal.save()
        res.send(updated)
    } else {
        res.send("Error in Updation.")
    }
}))

export default mealRouter