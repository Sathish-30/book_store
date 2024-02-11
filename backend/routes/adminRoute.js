import express from "express"
import Book from "../Db/book.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.post("/upload-book" , async(req , res) => {
    try{
        const {authorname , imageUrl , category , bookDescription , bookTitle , bookPdfUrl} = req.body;
        if(authorname && imageUrl && category && bookDescription && bookPdfUrl && bookTitle){
            console.log(authorname , imageUrl , category , bookDescription , bookPdfUrl ,bookTitle);
            const bookRecord = await Book.findOne({bookTitle : bookTitle , authorName : authorname});
            console.log(bookRecord);
            if(!bookRecord){
                const book = new Book({
                    authorName : authorname,imageUrl,category,bookDescription,bookTitle,bookPdfUrl
                })
                console.log(book);
                const record = await book.save();
                console.log(record);
                res.send("Book record added").status(200);
            }else{
                res.send("There is a same book already exists in Inventory").sendStatus(400);
            }
        }else{
            res.send("Need required information to add book to the inventory");
        }
    }catch(err){
        res.json({err});
    }
})

router.patch("/update-book/:id" , async(req , res) => {
    try{
        const id = req.params.id;
        const updateBook = req.body;
        console.log(updateBook);
        const book = await Book.findOne({_id : id});
        if(!book){
            res.json({"msg" : "No book found with the Id"}).status(400);
        }else{
            await Book.updateOne({_id : id} , {
                ...updateBook
            });
            res.send("Updated book");
        }
    }catch(err){
        res.json({err});
    }
})

router.delete("/delete-book/:id" , async(req , res) => {
    try{
        const id = req.params.id;
        const book = await Book.findOne({_id : id});
        if(!book){
            res.json({"msg" : "No book found with the Id"}).status(400);
        }else{
            const deletedBook = await Book.deleteOne({_id : id});
            console.log(deletedBook);
            res.json({"msg" : "Deleted the book"}).status(200);
        }
    }catch(err){
        res.json({err});
    }
})

export default router;