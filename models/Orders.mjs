import mongoose from "mongoose";

const {Schema} = mongoose;

const ordersSchema = new Schema({
    adId: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number    
    },
    quantity: {
        type: Number,  // num type m dongy 
        required: true,
        default: 1    // default mtlb at a time ek 
    },
    userId: {
        required: true, // required nh lgao ya req me false krdo tw ye nh do frontend sy jb bh chala jayega req true mtlb lazmi dia jaye 
        type: String
    }
})

const Orders = mongoose.model('orders', ordersSchema)
export default Orders;

//koe bh file par kam krne sy phly import moongoos Db library connect hogi 