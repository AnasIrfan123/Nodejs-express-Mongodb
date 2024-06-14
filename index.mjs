import express from 'express'
import db from './config/db.mjs'
import routes from './routes/index.mjs'
const app = express()

import { PORT } from './config/environment.mjs' // import environmt variable 

db.connection.once('open', () => console.log("connected to db ✔")).on("error", (err) => console.log("error connecting db -->", err)) //conect to server jo btaeyga connection strinng sahi tarhn se conect hoe ha ya nh

app.listen(PORT, function() {
    console.log('server is running at port ' + PORT);
})

// ----------------------------- COR'S POLICY ----------------------------------
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})
// ------------------------------------------------------------------

app.use(express.json())  //add or update/put or delete k lye ha json formate (crud oper k lye yeh main index file me lazmi use hoga)

// //GET, POST, PUT, DELETE
app.use('/', routes)
// //use ka mtlb ha koe bh request aye product/single etc backend me use is path ko use kr k jhn ka path hoga whn chli jayegi to wo routes ki file me chla jaye or router sy /krk jhn ka pth ho whn jaye 



// console.log('hello world');


//   wsy tw require ka keyWord use hota ha lakin (agr import export use krna ha tw es6 ha import export k lye mjs krna parega 
//  files bh mjs k name sy bnegi or pkg.json me mjs krna hoga to npm start ya dev sy server start hoga 
// )          