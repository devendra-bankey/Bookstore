import express, { Router } from 'express'
const app = express();
import cors from 'cors'
import booksRouter from './Routes/booksRoute.js'
import bodyParser from 'body-parser';

app.use(express.json());
app.use(cors())




app.use("/books",booksRouter)
export default app