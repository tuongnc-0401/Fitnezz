import express from 'express'
import User from '../models/userModel.js'
import data from '../data.js'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import { generateToken, isAdmin, isAuth } from '../utils.js'

const userRouter = express.Router()

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({})
    const createdUser = await User.insertMany(data.users)
    res.send({ createdUser })
}))

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                gender: user.gender,
                token: generateToken(user)
            })
            return;
        }
    }
    res.status(401).send({ message: "Invalid email or password" })
}))

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        gender: req.body.gender
    })
    const createdUser = await user.save()
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        gender: createdUser.gender,
        token: generateToken(createdUser),
    })
}))

userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        res.send(user)
    } else {
        res.status(404).send({ message: 'User Not Found' })
    }
}))

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.gender = req.body.gender
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8)
        }
        const updatedUser = await user.save()
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            gender: updatedUser.gender,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
        })
    }
}))

userRouter.get('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const users = await User.find({})
    res.send(users)
}))

userRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        isAdmin: req.body.isAdmin,
        gender: req.body.gender
    });
    const newUser = await user.save();
    res.send({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        gender: newUser.gender,
        token: generateToken(newUser),
    })
}))

userRouter.delete("/:id", isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deletedUser = await User.findById(req.params.id)
    if (deletedUser) {
        await deletedUser.remove()
        res.send({ message: "User Deleted" })
    } else {
        res.send("Error in Deletion.")
    }
}))

userRouter.put("/update/:id", isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.gender = req.body.gender
        user.isAdmin = req.body.isAdmin
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8)
        }
        const updatedUser = await user.save()
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            gender: updatedUser.gender,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
        })
    }
}))



export default userRouter