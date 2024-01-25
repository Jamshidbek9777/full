import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";
//config env
dotenv.config({ path: "./config.env" });

//database config
connectDb();

// rest objects
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/products", productRoute);
//rest apis
app.get("/", (req, res) => {
     res.send("<h1>Hello from the server</h1>");
});

//Port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
     console.log("Server is running...");
});
