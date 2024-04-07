import express from "express";
import Books from "../Models/books.models.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const foundBooks = await Books.find({});
        res.status(200).json(foundBooks);
    } catch (error) {
        console.log('Error while finding all books:', error);
        res.status(500).send('Error while finding all books');
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).send('Please provide all details');
        }
        const postedBook = await Books.create({
            title,
            author,
            publishYear
        });
        res.status(201).json(postedBook);
    } catch (error) {
        console.log('Error while creating book:', error);
        res.status(500).send('Error while creating book');
    }
});

router.put('/:ID', async (req, res) => {
    try {
        const ID = req.params.ID;
        const updatedBook = {};
        if (req.body.title) updatedBook.title = req.body.title;
        if (req.body.author) updatedBook.author = req.body.author;
        if (req.body.publishYear) updatedBook.publishYear = req.body.publishYear;

        const result = await Books.findByIdAndUpdate(ID, updatedBook, { new: true });
        if (!result) {
            return res.status(404).send("Book not found");
        }
        res.status(200).json(result);
    } catch (error) {
        console.log('Error while updating book:', error);
        res.status(500).send('Error while updating book');
    }
});

router.delete('/:ID', async (req, res) => {
    try {

        const deletedBook = await Books.findByIdAndDelete(req.params.ID);
        if (!deletedBook) {
            return res.status(404).send("Book not found");
        }
        res.status(200).send("Book deleted successfully");
    } catch (error) {
        console.log('Error while deleting book:', error);
        res.status(500).send('Error while deleting book');
    }
});

export default router;
