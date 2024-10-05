// const express=require("express");

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json()); //allows us to accept json data in the body

app.use("/api/products", productRoutes); //the routes at product.route.js will be preffixed with /api/products

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server started at port ${PORT}`);
});
