import DbConnect from "../../utils/DbConnect";
import OrderData from "../../models/orderModel";

export default async function (req, res) {
  if (req.method === "POST") {
    try {
      await DbConnect();

      const checkoutOrder = await OrderData.create(req.body);
      res.status(200).json(checkoutOrder);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
