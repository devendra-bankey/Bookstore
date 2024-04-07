import mongoose from "mongoose";


const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    
    author:{
        type:String,
        required:true

    },
    
    publishYear:{
        type:Number,
        required:true
    }
})

const Books = mongoose.model('Books', BookSchema )
export default Books
