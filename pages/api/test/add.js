import Test from "../../../models/testModel";
import DbConnect from "../../../utils/DbConnect";

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ oof: "oof" });
  } else if (req.method === "POST") {
    try {
      await DbConnect();

      const test = await Test.create(req.body);
      res.json({ test });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
