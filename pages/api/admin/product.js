import DbConnect from "../../../utils/DbConnect";
import ProductData from "../../../models/productModel";

export default async function adminHandler(req, res) {
  if (req.method === "POST") {
    try {
      await DbConnect();

      const product = await ProductData.create(req.body);
      res.json({ product });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
