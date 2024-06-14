import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken'
import jwtSecret from '../config/jwt.mjs' // import secret in users files
    
//jb user authen ho raha ha jo wo kia data k tor par dega tw us k lye userschema bnaya or mongos.model "users" suerschema kr k export krdya 
const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String, // type btae kis type me dogy string lgae
        required: true, // required bh di (email lazmi deni ha without email authenticate nh hogi)
        unique: true // or unique bh btae hr bar user ki email unique honi chaye warna authen nh hogi
    },
    password: {
        type: String,
        required: true,
        minLength: 6 // at least 6 character ka password hona chaye 
    },
    firstname: {
        type: String,
        required: true
    }, 
    lastname: {
        type: String,
        required: true
    },
    contactno: {
        type: Number,
        required: true
    },
    tokens: {
        default: [],
        type: []
    }
})

// // jb hm users ko authent krwaegy to schema k mutabiq password Db me ayega to DB me pass aysy nh rkhte us k lye ( userSchema.pre pre means phly )  
// userSchema.pre()
// // console.log(this);  //pre phly this  ko log me lya  this k nandr 1 pora obj araha hoga 

userSchema.pre('save', function (next) {
    const user = this // this me password araha tha obj me to isko user variba me lekar aye  

     //encryption
     
     if (user.isModified('password')) {//Yeh line yeh check karta hai ke agar "user" ka "password" modify kiya gaya hai ya nahi. Agar haan, toh if statement ke andar wale code ko execute kiya jata hai, warna nahi.
// phly sy he alag ho passwrd ya tabdeli hoe ha
         const salt = bcrypt.genSaltSync(10); // yahn isne salt milaya hoga wo us salt ko or password ko tw uper user varibe me = this 
         const hash = bcrypt.hashSync(user.password, salt); // upr variabl me le lia or salt h sath hashing 2no kr k pass mila dia 
     
         user.password = hash // ab yhn user.pass hashing xyz xyz update hokar aye 
        
      }
    
    next() // then ye kam krne k bad next ko call krdya (agr ap next nh karogy to ye pass email & fulname hashing bh krde ga next call nh hoa tw DB me nh rakhega or agay proceed nh karega ) or pre kha tha tw save krne sy phly ab ye next par jayega to ab ye REG hogaya model me jayega user.get ki req lagi ha login
})


// // ------------------------------------------------------------------ // ye userschema methos & pre whn bna sakte thy lakin whn sirf api wla kam hoga   // userSchema.mehtods comparepas matching bh ho sakta ha ouserschems method lazmi ha 
userSchema.methods.comparePassword = function (password) { //ab is func me wohi ayega jo parameter sy receive kia hoga passw --(ye passw wo ha to consol fronte sy snd kai ha or 1 woh hoga jo Db me already rakha hoga )-- 2no compare hongy ab Db wla pas const pass = this ye wo pas ayega jo Db sy find kia tha 
    const user = this

// Exampl  //user.password === db password (encrypted) asjdhu2i346193    // pasword checking 
    //password === frontend password (normal) 123456          

    console.log('db password', user.password);
    console.log('frontend password', password);

    return  bcrypt.compareSync(password, user.password) //bcrypt.compareSync) ye bcrypt ka method ha to bcrypt ne dia ha ye wo passw ha jo ap login krte waqt de rhy hn or user.passw ye wo ha anas  xyz xyz hashing hoawa 
// agr 2no pas match ho jaye to return krdo  use routes me is correct me 
}

// ------------------------------- TOKEN GEN--------
userSchema.methods.generateToken = function () {  // yeh userSchema ka method define krta or token generate krta ha.  
    const {_id} = this               // user ki unique _id ka use krk jsonwebtoken library sy token generte krta ha.
    const token = jwt.sign({_id}, jwtSecret);   // jwt lib jwt.sign funct ka use krta or user ki ID payload k sath le kar tokn generte then
// jwt signature krta ha or 
    return token    // token ko retrn krta h
}

const Users = mongoose.model("users", userSchema)

export default Users

// schema me user ko register sy phly jo becryipt pass krwya wo yhn kia ha 