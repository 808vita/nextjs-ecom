import DbConnect from "../../utils/DbConnect";
import ProductData from "../../models/productModel";

export default async function getProducts(req, res) {
  if (req.method === "GET") {
    try {
      await DbConnect();

      const productList = await ProductData.find();
      res.status(200).json(productList);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
