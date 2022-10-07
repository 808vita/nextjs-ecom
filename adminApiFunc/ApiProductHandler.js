import ProductData from "../models/productModel";
import DbConnect from "../utils/DbConnect";

const addProduct = async (req, res) => {
  //add product to db -- requires admin role
  try {
    await DbConnect();
    const product = await ProductData.create(req.body);
    res.json({ product });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const editProductDetails = async (req, res) => {
  //edit product details -- requires admin role
  try {
    await DbConnect();

    const product = await ProductData.create(req.body);
    res.json({ product });
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
