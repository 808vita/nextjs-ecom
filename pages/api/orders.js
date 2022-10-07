import DbConnect from "../../utils/DbConnect";

import OrderData from "../../models/orderModel";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function getOrders(req, res) {
  if (req.method === "GET") {
    //get all orders for current user from db
    try {
      await DbConnect();
      const session = getSession(req, res);
      const email = session.user.email;

      const ordersList = await OrderData.find({ email }).sort({
        createdAt: -1,
      });
      res.status(200).json(ordersList);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
});
