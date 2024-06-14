
import dotenv from "dotenv";

dotenv.config()  
// dotenv config  ye env ki trf sy cal kia ha kyun k environment varible me sub variable bnay han

export const PORT = process.env.PORT
export const MONGO_URI = process.env.MONGO_URI
export const JWT_SECRET = process.env.JWT_SECRET

