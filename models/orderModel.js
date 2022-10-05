import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
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
