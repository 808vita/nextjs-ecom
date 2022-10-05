import { Schema, model, models } from "mongoose";

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  orderedItems: {
    type: Array,
    required: true,
  },
});

const OrderData = models.order || model("order", orderSchema);
export default OrderData;
