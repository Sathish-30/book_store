import mongoose from "mongoose";
const Book = new mongoose.Schema({
    authorName : String,
    imageUrl : String,
    category:String,
    bookDescription : String,
    bookTitle:String,
    bookPdfUrl:String,
});

export default mongoose.model("Book" , Book);