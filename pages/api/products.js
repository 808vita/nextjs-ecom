import DbConnect from "../../utils/DbConnect";
import ProductData from "../../models/productModel";

export default async function getProducts(req, res) {
  if (req.method === "GET") {
    //get all products from db -- open to public
    try {
      await DbConnect();
      //find all products and sort based on updatedAt
      // -- would display recently added/modified product at top
      const productList = await ProductData.find().sort({ updatedAt: -1 });
      res.status(200).json(productList);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
