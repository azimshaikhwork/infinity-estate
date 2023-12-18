// import express from "express";
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// routers
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
// database acync connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connection established")

}
const app = express();
app.use(express.json())



app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT} !!!!!!`);
})


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// error message setter
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 550;
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message,
    })
})