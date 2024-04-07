import mongoose from "mongoose";
import app from "./app.js";
import connectionDB from "./DB/index.js"
import 'dotenv/config'

const PORT = 4500;

connectionDB()
.then(
    app.listen(PORT,() => {
        console.log(`Port Listening Sucessful`)
    })
    
)

.catch((error) => {
    
    console.log(`Something Went wrong while connecting  with Server`)
})
    
