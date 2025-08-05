import express from "express";
import connectdb from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/auth.js";
import cors from "cors";
const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://webcoin-1.onrender.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", userRouter);

app.listen(port, () => {
  connectdb();
  console.log(`server is listen on port ${port} `);
});
