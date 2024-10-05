//we are going to have all the endpoints here

import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js"

const router = express.Router();

//GET all the products
router.get("/", getProducts);

//create product
router.post("/", createProduct);

//update product by their id
router.put("/:id", updateProduct);

//delete product by their id
router.delete("/:id", deleteProduct);

 export default router;
