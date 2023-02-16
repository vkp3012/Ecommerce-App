import express  from "express";
import cookieparser from "cookie-parser"
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());
mongoose.set('strictQuery', true);

const port = process.env.PORT || 5000
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("mongodb connected");
    server.listen(port,()=>{
        console.log(`Server is listening on post ${port}`);
    });
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})