import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import { isAdmin, isAuth } from '../utils.js'

const orderRouter = express.Router();

orderRouter.get('/mine', isAuth, expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 })
    res.send(orders)
}))

orderRouter.get('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({}).sort({ createdAt: -1 })
    res.send(orders)
}))

orderRouter.put('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    const datetime = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
    if (order) {

        if (req.body.isPaid) {
            order.isPaid = req.body.isPaid
            order.paidAt = datetime
            order.status = "Shipping"
        }

        if (req.body.isDelivered) {
            order.isDelivered = req.body.isDelivered
            order.deliveredAt = datetime
            order.isPaid = true
            order.paidAt = datetime
        }
        if (order.isPaid && order.isDelivered) {
            order.status = "Completed"
        }
        order.status = req.body.status || order.status
        const updated = await order.save()
        res.send(updated)
    } else {
        res.send("Error in Updation.")
    }
}))

orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' })
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: 0,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        })
        const createdOrder = await order.save()
        res.status(201).send({ message: 'New Order Created', order: createdOrder })
    }
}))

orderRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        res.send(order)
    } else {
        res.status(400).send({ message: 'Order Not Found' })
    }
}))



export default orderRouter