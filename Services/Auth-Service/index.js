import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/index.js";
import connectDb from "./utils/mongo.js";
config();
const app = express();
const port  = process.env.PORT || 8080;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS || [];
console.log("Allowed Origins: " , ALLOWED_ORIGINS);

app.use(
    cors({
      origin: ALLOWED_ORIGINS,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    }),
  );
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.get("/", (req, res)=>{
    res.status(200).json("I am working");
})

app.use("/user", UserRouter);

app.listen(port, ()=>{
    console.log(`Server Working on http://localhost:${port}`);
})
