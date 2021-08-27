import mongoose from 'mongoose'

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    instruction: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, required: true },
    fruit: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    vegetable: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    dairy: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    grain: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    protein: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
}, {
    timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)
export default Meal