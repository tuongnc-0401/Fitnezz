import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routers/productRouter.js'
import userRouter from './routers/userRouter.js'
import dotenv from 'dotenv'
import orderRouter from './routers/orderRouter.js';
import programRouter from './routers/programRouter.js'
import ingredientRouter from './routers/ingredientRouter.js'
import calculatorRouter from './routers/calculatorRouter.js';
import mealRouter from './routers/mealRouter.js'
import cors from 'cors';




dotenv.config()
const app = express()
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
mongoose.connect('mongodb+srv://tuong:tuong@cluster0.z7g93.mongodb.net/fitnezz', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/ingredients', ingredientRouter)
app.use('/api/fitnessvideo', programRouter)
app.use('/api/calculators', calculatorRouter)
app.use('/api/meals', mealRouter)


app.get('/', (req, res) => {
    res.send('Sever is ready!!!')
})
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Sever at http://localhost:${port}`)
})