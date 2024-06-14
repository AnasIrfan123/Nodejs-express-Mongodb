import mongoose from "mongoose";

const {Schema} = mongoose;

const adsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

const Ads = mongoose.model('ads', adsSchema)

export default Ads;


// 88888888888888888888888888888888888888888888888888888888888888






// import mongoose from "mongoose";

// const {Schema} = mongoose;

// // Define the schema for options
// const optionSchema = new Schema({
//     half: {
//         type: Number,
//         required: true
//     },
//     full: {
//         type: Number,
//         required: true
//     },
//     description: String
// });

// // Define the schema for ads
// const adsSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     img: {
//         type: String,
//         required: true
//     },
//     options: [optionSchema], // Array of options using the defined option schema
//     description: String
// });// without fill mongoDb me nh jayega 

// const Ads = mongoose.model('ads', adsSchema);

// export default Ads

// ==========
// {
//     "title": "tikka piza",
//     "category": "piza",
//     "img": "piza.jpg",
//     "options": [{
//       "half": "130",
//       "full": "80"
//     }],
//      "description": "extra spices and cremiel nad vanilla owesome"
//   }