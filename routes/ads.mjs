import express from 'express'
import Ads from '../models/Ads.mjs'
const router = express.Router()

//POST: localhost:3001/ads

router.get('/', async (req, res) => {
    const ads = await Ads.find()
    res.send({ message: 'Ads fetched successfully', data: ads})
}) 

// // router.get('/:id')

router.post('/post', async (req, res) => {
    try {
        const ad = new Ads(req.body)
        await ad.save()

        res.send({ message: 'Ad posted successfully' })
    } catch (e) {
        res.send({ message: e.message })
    }
})

// //router.put('/:id')
// //router.delete('/:id')

// // ---------------------------------------------
// // PUT: localhost:3001/ads/update

// router.put('/update/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const updateData = req.body   // New data to update

//         const updatedAd = await Ads.findOneAndUpdate({_id: id}, updateData, { new: true });

//         if (!updatedAd) {
//             return res.status(404).send({ message: 'Ad not found' });
//         }

//         res.send({ message: 'Ad updated successfully', data: updatedAd })
//     } catch (e) {
//         res.send({ message: e.message })
//     }
// })

// // // DELETE: localhost:3001/ads/delete/:id

// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Find the ad by ID and delete it
//         await Ads.findByIdAndDelete(id);

//         res.send({ message: 'Ad deleted successfully '})
//     } catch (e) {
//         res.send({ message: e.message })
//     }
// })  

export default router


// single =  id ---------------=================================== ye 2 bh try krna ha 

// products.mjs me bh update delete or put nh hp rah aha Db connect me hoga 


// ----------------------------------------------------------

// localhost:3001/ads        //location me ads is trhn or conso me ads

// fetch('http://localhost:3001/ads/post',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Iphone',
//         description: 'good look',
//         amount: '200'
//     })
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.error(err))