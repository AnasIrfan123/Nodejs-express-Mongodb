
import express from 'express'
const router = express.Router()

//sample api (data)
const data = [
    { "id": 1, "title": "I Phone 9", "description": "An I Phone 9 mobile which is  like apple brand", "price": 504349, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg", "images": ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg", "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"] },
    { "id": 2, "title": "Sumsung", "description": "An Sumsung mobile which is nothing like apple", "price": 50449, "discountPercentage": 55.96, "rating": 1.69, "stock": 34, "brand": "Sumsung", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg", "images": ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg", "https://cdn.dummyjson.com/product-images/1/3.jpg", "https://cdn.dummyjson.com/product-images/1/4.jpg", "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"] },
    { "id": 3, "title": "Google pixel", "description": "nice feature latest upgradation", "price": 100000, "discountPercentage": 10, "rating": 1.69, "stock": 504, "brand": "Google piexels", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",},
    { "id": 4, "title": "oppo", "description": "speed acceleration dark light mood", "price": 23000, "discountPercentage": 10, "rating": 0.69, "stock": 1190, "brand": "oppo", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg", "images": ["https://cdn.dummyjson.com/product-images/1/1.jpg"]},
    { "id": 5, "title": "vivo", "description": "all features are good", "price": 330000, "discountPercentage": 10, "rating": 3.69, "stock": 410, "brand": "android", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",}
]

// (ye sari product or is file dummy hardcode ki ha otherwise data get post or something DB sy connect kr k frontend sy dengy)
//products
router.get('/', (req, res) => {
    res.send({ message: 'products fetch successfully', data })
})

//products/single           //iska single bh products k agay /single lga kar access ayega
router.get('/single', (req, res) => {
    res.send({message: 'single products fetch successfully', data: data[0]})
})

//products/:id
router.get('/:id', (req, res) => {
    console.log('req', req.params.id);
    //db sy is id ka data fetch karoga
    res.send({message: 'id product fetched successfully', data: data[req.params.id] })
})

// products /add
router.post('/add', (req, res) => {
    console.log('req-add', req.body);
    // db me product add karengy
    res.send({message: 'product added successfully!', data: data.push(req.body)})
})

// ----------------------update  or delete-------------------------------- ye 2no frontend ki req sy dekhe nh ha
// products/update
router.put('/update', (req, res) => {
    console.log('req-updt', req.body);
      // db me product update karengy
    res.send({message: 'product updated successfully!'})
})

// products/:id
router.delete('/:id', (req, res) => {
    console.log('req-del', req.params.id);
       // db me se is product ko delete karengy
    res.send({ message: 'product deleted successfully!'})
})


export default router;

// Form Frontend 
// ===================

// fetch('http://localhost:3001/products/add', ) {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Iphone',
//         description: 'xyz',
//         price: 2000
//     })
// }
// .then(res => res.json())
// .then(res => console.log(res))