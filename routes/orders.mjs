
import express from "express";
import Orders from "../models/Orders.mjs";

const router = express.Router()

// orders Get Req
router.get('/', async (req, res) => {
    const orders = await Orders.find()

   res.send({ message: 'Orders fetched Successfully!', data: orders })
})

// orders Add req
router.post('/add', async (req, res) => {
    await Orders.create(req.body)

    res.send({ message: 'Orders added Successfully! '})
})

export default router;

// ----------------------------------------------------------

// localhost:3001/orders       //location me ads is trhn or conso me ads

// fetch('http://localhost:3001/orders/add',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         adId: '15257r6',
//         title: 'Iphone',
//         description: 'good look',
//         price: 200,
//         quantity: 2,
//         userId: '1235'        
//     })
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.error(err))
