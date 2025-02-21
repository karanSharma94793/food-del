import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true }, // Changed to Array to handle list of items
  amount: { type: Number, required: true }, // Changed to Number for monetary values
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true }
  },
  status: { type: String, default: "Food Processing" },
  createdAt: { type: Date, default: Date.now }, // Changed to Date type
  payment: { type: Boolean, default: false }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
