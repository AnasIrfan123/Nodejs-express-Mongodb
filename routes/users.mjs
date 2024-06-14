import express from "express";
import Users from "../models/Users.mjs";

import verifyToken from "../middlewares/verifyToken.mjs";

const router = express.Router()

// // -------------------------------- REGISTERED ------------------------------------------------

router.post('/register', async (req, res) => {

    try {
        const user = new Users(req.body) //user varibale me new Users models me schema bnaya tha uska req.body sy milega (data req.body me ayega)
        await user.save() //or data milty he user variba ko save krwa dia
        
        res.send ({ message: 'User Registered Successfully !' })

    } catch (e) {
        res.send({ message: e.message })
        // res.status(400).send({ message: e.message })
    } 
})// ab jb user REG krta ha tw hm kabhi bbh DB me uska password open nh rakhte (jb user REG hoga tw schema m 1 method bnaengy userschema.pre models m ha schema ) 




// // -------------------------------- GET REQ ALL USER INFO ------------------------------------------------

// //ab user REG ho gya or get ki req bh lagi hoe ha registered kr bad get bh ho jayega 
router.get('/', async (req, res) => {
                         //Users.find() multiple database retrieve krne k lye use hota ha 
   const users = await Users.find() //jb user reg ho jayega to get ki req sy user.find kr k pta lgya jaye user registeredc ha then login process
   res.send({ message: 'Data fetched Successfully', data: users }) //then shown the mesaage 

})




// // -------------------------------- LOGIN ------------------------------------------------

// //login k lye emal & pas req.body me arhi ha  
router.post('/login', async (req, res) => {         

    try {
        const {email, password} = req.body // destruct req.body se Db sy dta extract kia
        //Step 1: Check if email exists
        const user = await Users.findOne({ email }) //findOne (y dtabase sy single document retrieve krne me use hota ha ) multiple docu critria ko match krta ha

        if (!user) {
            res.status(404).send({ message: 'Email not found!' })  //emil find m nh mli tw user not found karega
            return
        }

         //Step 2: Compare the passwords   // 2nd Step ha user ka pass match ho raha ha corect ha  //agr pass correct hoa to yhn bh user.compare ka 1 schema me bnya user tw hmra schema ha    userschema.methods.comparepas
         const isCorrectPassword = user.comparePassword(password)  // ab y yhn sy parameter sy passw ko pas kia ab ye Db or Fronent sy login wla passw 2no mko compare karega 
//true pass aye to is correct me ayega 

         if (!isCorrectPassword) { // pass macth nh hoga tw false pass condtion chal jayegi 
           res.status(404).send({ message: 'Password is incorrect!' })//or fasle aya tw idhr ayega 
            return //return ki ye false pas condi  //return lazmi lgna ha 
        }

        //Step 3:      Generate Token ---------------------------

        const token = user.generateToken()  //y code usr ko login or genToken funct sy ek new token gen krta ha
        user.tokens.push(token)       //phr token user token m push kia jta h.
        await user.save() // us k bad updated user obj ko save kia jta h. 

        res.send({ message: "User logged in successfully!", token }) //jb ye sari requirements pori hony pr success ka msg show krta ha  

    } catch (e) {
        // res.send({ message: e.message })
        res.status(400).send({ message: e.message })  
    }
})

// ----------------------------------- LOGOUT ---------------------------------------

router.put('/logout', verifyToken, async (req, res) => {
    await Users.findByIdAndUpdate(req.userId, { $pull: { tokens: req.tokenToRemove } })
    res.send({ message: 'Logged Out Successfully!' })
})

export default router;




// ==================== without connect mongoDb userInfo code =============================

// import express from 'express'
// const router = express.Router()

// const data = [{ 
//     "Name": "Anas",
//     "Age": 21,  
//     "Education": "I-Com",
//     "Courses": "Web & Mobile App Devel"
//     },

// ]

// //users info
// router.get('/', (req, res) => {
//     res.send({ message: 'users data fetched successfully', data})
// })

// export default router;


// --------------------------------- FOR FRONT-END REQUEST-------------------------

// http://localhost:3001/users/register       //location me port or /users/register is trhn  (ye thunder sy kai or browser log me bh is trhn sy hoga)

// fetch('http://localhost:3001/users/post',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         email: 'shaziaarif@gmail.com',
//         password: '123456',
//         firstname: 'shazia',
//         lastname: 'arif'
//     })
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.error(err))