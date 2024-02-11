import express from "express";
import cors from "cors"
import dotenv from 'dotenv';
// Import Routes
import adminRoute from "./routes/adminRoute.js";
import homeRoute from "./routes/HomeRoute.js";
import connect from "./Db/connection.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Load Database
connect();

// Middleware
app.use((req , res , next) => {
    console.log(`The request url is ${req.url} and the request method is ${req.method}`);
    next();
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use("/" , homeRoute)

app.use("/admin" , adminRoute);

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))
