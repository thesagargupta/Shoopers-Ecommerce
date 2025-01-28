import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';

const app = express()
const port = process.env.PORT || 9001
connectDB()
connectCloudinary()

// middleware

app.use(express.json())
const corsOptions = {
    origin: 'https://shoopers.netlify.app', // Replace with your Netlify URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies or auth headers
};
app.use(cors(corsOptions))

//api end point
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart",cartRouter)
app.get("/", (req, res) => {
    res.send({
        activeStatus: true,
        error:false
    })
})

app.listen(port, () =>console.log("port listening " + port))