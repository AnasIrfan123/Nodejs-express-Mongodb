import mongoose from 'mongoose'

import { MONGO_URI } from './environment.mjs';  // imp kia envir varib me sy

// const mongoose = require('mongoose');

mongoose.connect(MONGO_URI)



export default mongoose;


// or agay slash kr k database ka name dena parega   /sample_