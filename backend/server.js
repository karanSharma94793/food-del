import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // Note the .js extension
import foodRouter from "./routers/foodRoute.js";
import userRouter from "./routers/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routers/cartRoute.js";
import orderRouter from "./routers/orderRoute.js";

const app = express();
const port =process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();


//api end points
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
// knowv any file in uploads can be access by /image /file name

app.get('/', (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
