import "./config/env.js"
import express from "express";
import err_middleware from "./middleware/Error/error.middleware.js";
import cors from "cors";

const app = express();




app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(err_middleware)
export default app
