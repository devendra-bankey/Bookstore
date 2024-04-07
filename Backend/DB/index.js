import 'dotenv/config'
import mongoose from 'mongoose'
 

const DBconnection = async () => {
    
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/BooksDB")
        console.log(`MongoDB connected Sucessfully`)
        
    } catch (error) {
        console.log(`Something Went Wrong While connecting to DB`)
    }
}


export default DBconnection