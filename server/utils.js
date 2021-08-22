import jwt from 'jsonwebtoken'
// export const cloudinary = require('cloudinary').v2
import cloudinary from 'cloudinary'
export const cloudinary1 = cloudinary.config({
    cloud_name: 'tuongtuong0401',
    api_key: '542792612474969',
    api_secret: 'WFMTbxBh13oyoH24EDQxxlzgUNk',
})




export const generateToken = (user) => {
    return jwt.sign({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length)
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    req.status(401).send({ message: 'Invalid token' })
                } else {
                    req.user = decode;
                    next()
                }
            }
        )
    } else {
        res.status(401).send({ message: 'No token' })
    }
}

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next()
    }
    return res.status(401).send({ msg: 'Admin Token is not valid.' })
}



