import mongoose from "mongoose";
import Product from "../model/product.model.js"

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in deleting product");
    res.status(404).json({ success: false, message: "product not found" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////

export const createProduct = async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.Image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product); //Product from model

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
/////////////////////////////////////////////////////////////////////////////////////

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "product has been updated",
      data: updatedProduct,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////

export const deleteProduct = async (req, res) => {
  // console.log(req)

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
