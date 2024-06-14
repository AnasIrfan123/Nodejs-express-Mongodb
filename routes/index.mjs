import express from 'express'
import products from './products.mjs'
import users from './users.mjs'

import ads from './ads.mjs'
import orders from './orders.mjs'



const router = express.Router()

router.get('/', (req, res) => {
    // res.send({message: 'Hello World, ===> from the index route!'})
    res.send('Hello World!')
})




router.use('/products', products)     // use middle ware khlta ha
router.use('/users', users)

router.use('/ads', ads)
router.use('/orders', orders)


export default router