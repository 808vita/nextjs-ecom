import DbConnect from "../../../utils/DbConnect";
import ProductData from "../../../models/productModel";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(function checkAdmin(req, res) {
  const session = getSession(req, res);
  const user = session.user;
  // console.log(user);
  if (user?.role[0] !== "admin") {
    //throws error & exits if the user is not an admin
    res.status(400).json({ error: "requires admin permission" });
    return;
  }
  ApiProductHandler(req, res);
  async function ApiProductHandler(req, res) {
    if (req.method === "POST") {
      //add product to db -- requires admin role
      try {
        await DbConnect();
        const session = getSession(req, res);
        const user = session.user;
        const product = await ProductData.create(req.body);
        res.json({ product, user });
      } catch (error) {
        res.status(400).json({ error });
      }
    }
  }
});
