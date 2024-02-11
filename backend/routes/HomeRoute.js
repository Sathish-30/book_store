import express from "express";
import Book from "../Db/book.js";

const homeRouter = express.Router();

homeRouter.get("/all-books" , async(req , res) => {
    try{
        const books = await Book.find();
        res.send(books);
    }catch(err){
        res.json({err});
    }
})

homeRouter.get("/books" , async(req , res) => {
    try{
        if(req.query?.category){
            const category = req.query.category;
            const books = await Book.find({category : category});
            res.send(books).status(200);
        }
    }catch(err){
        res.json({err});
    }
})



export default homeRouter;