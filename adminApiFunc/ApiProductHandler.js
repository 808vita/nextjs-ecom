import mongoose from "mongoose";
import ProductData from "../models/productModel";
import DbConnect from "../utils/DbConnect";

const addProduct = async (req, res) => {
  //add product to db -- requires admin role
  try {
    await DbConnect();
    const product = await ProductData.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const editProductDetails = async (req, res) => {
  //edit product details -- requires admin role
  try {
    await DbConnect();

    const { productId, title, price, description } = res.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.json(404).json({ error: "no such record" });
      //check for vaild mongodb id
    }

    const productExists = await Dealer.findById(productId);
    console.log(productExists);
    if (!productExists) {
      return res.status(404).json({ error: "no such record" });
      //check if the product exists in the db
    }

    const productUpdate = await ProductData.findByIdAndUpdate(productId, {
      title,
      price,
      description,
    });
    res.status(204).json({ productUpdate });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default async function ApiProductHandler(req, res) {
  if (req.method === "POST") {
    await addProduct(req, res);
    return;
  } else if (req.method === "PATCH") {
    await editProductDetails(req, res);
    return;
  }
}
