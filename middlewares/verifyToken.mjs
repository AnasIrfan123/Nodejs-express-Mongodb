import jwt from 'jsonwebtoken'
import Users from '../models/Users.mjs'
import jwtSecret from "../config/jwt.mjs";

async function verifyToken(req, res, next) {
    // const token = req.headers.authorization        // ?.slice(7)
    const token = req.headers.authorization?.split(' ')[1];

    console.log('token => ', token);
    console.log('req.headers.authorization => ', req.headers.authorization);

    if (!token) {
        res.status(401).send({ message: "No access!" })
        return
    }

    try {
        const decoded = jwt.verify(token, jwtSecret)

        const tokenExists = await Users.findOne({ tokens: token})

        if (!tokenExists) {
            res.status(401).send({ message: 'Invalid token!'})
            return
        }    

        req.userId = decoded._id
        req.tokenToRemove = token

        next()
    } catch (e) {
        res.status(401).send({ message: "Invalid token!" })
    }
}

export default verifyToken;