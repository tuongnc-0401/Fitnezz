import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import CalculatorInfo from '../models/calculatorModel.js'
import { isAuth } from '../utils.js'

const calculatorRouter = express.Router();

// calculatorRouter.get('/mine', isAuth, expressAsyncHandler(async (req, res) => {
//     const orders = await Order.find({ user: req.user._id })
//     res.send(orders)
// }))

calculatorRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {

    const calculatorInfo = new CalculatorInfo({
        activity: req.body.activity,
        age: req.body.age,
        caloGainLoss: req.body.caloGainLoss,
        estimateDate: req.body.estimateDate,
        estimateDay: req.body.estimateDay,
        height: req.body.height,
        numBMI: req.body.numBMI,
        numTDEE: req.body.numTDEE,
        speed: req.body.speed,
        statusBMI: req.body.statusBMI,
        target: req.body.target,
        weight: req.body.weight,
        weightTarget: req.body.weightTarget,
        user: req.user._id
    })
    const createdInfo = await calculatorInfo.save()
    res.status(201).send({ message: 'New Calculator Info Created', calculatorInfo: createdInfo })

}))

// calculatorRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
//     const order = await Order.findById(req.params.id)
//     if (order) {
//         res.send(order)
//     } else {
//         res.status(400).send({ message: 'Order Not Found' })
//     }
// }))


export default calculatorRouter